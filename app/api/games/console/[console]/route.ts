// app/api/games/console/[console]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { resolveConsoleName } from "@/lib/consoleMap";
import { CreateGameSchema } from "@/lib/zod-schemas";

export const dynamic = "force-dynamic";

const GAMES_PER_PAGE = 50;

/** Map slugs in your URL to the Console.name in DB */
const CONSOLE_NAME_BY_SLUG: Record<string, string> = {
  ps2: "PlayStation 2",
  gamecube: "GameCube",
  // add more if needed
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ console: string }> } // params may be a Promise in recent Next.js
) {
  try {
    const { console: consoleSlug } = await context.params;

    const consoleName = CONSOLE_NAME_BY_SLUG[consoleSlug] ?? consoleSlug; 
    // Fallback: if you actually use names directly in the URL, this still works.

    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const sort = searchParams.get("sort") || "alphabetical";
    const skip = (page - 1) * GAMES_PER_PAGE;

    // ----- Filtering by related Console (nullable relation => use `is:`) -----
    const where = {
      console: {
        is: { name: consoleName },
      },
    } as const;

    // ----- Sorting -----
    // Prisma supports ordering by relation counts like below.
    // For "owned" strictly (UserGame.owned === true), ordering at DB level isn't trivial,
    // so we’ll keep it simple and use total owners count; you can refine later if needed.
    let orderBy:
      | { title: "asc" | "desc" }
      | { releaseDate: "asc" | "desc" }
      | { achievements: { _count: "asc" | "desc" } }
      | { users: { _count: "asc" | "desc" } } = { title: "asc" };

    if (sort === "achievements") orderBy = { achievements: { _count: "desc" } };
    else if (sort === "owned") orderBy = { users: { _count: "desc" } };
    else if (sort === "year") orderBy = { releaseDate: "desc" }; // newest first

    const [items, totalCount] = await Promise.all([
      prisma.game.findMany({
        where,
        include: {
          achievements: { select: { id: true } },
          users: { select: { id: true, owned: true } }, // we’ll compute owners = owned==true client-side
          console: { select: { name: true } },
        },
        orderBy,
        skip,
        take: GAMES_PER_PAGE,
      }),
      prisma.game.count({ where }),
    ]);

    const games = items.map((g) => {
      const owners = g.users.filter((u) => u.owned).length;
      const releaseYear = g.releaseDate ? new Date(g.releaseDate).getFullYear() : null;

      return {
        slug: g.slug,
        title: g.title,
        achievements: g.achievements.length,
        releaseYear,
        owners,
        // Use your stored cover path if you prefer g.coverImage; or keep your public/ structure:
        cover: g.coverImage || `/games/${g.slug}/cover.png`,
        icon: `/games/${g.slug}/icon.png`,
        console: g.console?.name ?? consoleName,
      };
    });

    return NextResponse.json({
      games,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / GAMES_PER_PAGE),
    });
  } catch (err) {
    console.error("Failed to fetch games:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ console: string }> }
) {
  try {
    await requireAdmin();

    const { console } = await context.params;
    const consoleName = resolveConsoleName(console);

    const payload = await req.json();
    const parsed = CreateGameSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const data = parsed.data;

    // Ensure console exists
    const dbConsole = await prisma.console.findUnique({
      where: { name: consoleName },
      select: { id: true },
    });
    if (!dbConsole) {
      return NextResponse.json({ error: "Console not found" }, { status: 404 });
    }

    // Enforce slug uniqueness
    const exists = await prisma.game.findUnique({
      where: { slug: data.slug },
      select: { id: true },
    });
    if (exists) {
      return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
    }

    // Create the game
    const created = await prisma.game.create({
      data: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        coverImage: data.coverImage,
        releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
        developer: data.developer,
        publisher: data.publisher,
        screenshots: data.screenshots, // String[]
        console: { connect: { id: dbConsole.id } },
      },
      select: { slug: true },
    });

    return NextResponse.json({ ok: true, slug: created.slug }, { status: 201 });
  } catch (err: any) {
    const status = err?.status ?? 500;
    return NextResponse.json({ error: "Internal Server Error" }, { status });
  }
}