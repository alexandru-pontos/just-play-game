import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const GAMES_PER_PAGE = 50;

export async function GET(
  req: NextRequest,
  { params }: { params: { console: string } }
) {
  const consoleParam = params.console;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const sort = searchParams.get("sort") || "alphabetical";

  const skip = (page - 1) * GAMES_PER_PAGE;

  try {
    const console = await prisma.console.findFirst({
      where: { name: { equals: consoleParam, mode: "insensitive" } },
    });

    if (!console) {
      return NextResponse.json({ error: "Console not found" }, { status: 404 });
    }

    let orderBy: any = { title: "asc" };
    if (sort === "achievements") orderBy = { achievements: { _count: "desc" } };
    if (sort === "owned") orderBy = { users: { _count: "desc" } };
    if (sort === "year") orderBy = { releaseDate: "desc" };

    const games = await prisma.game.findMany({
      where: { consoleId: console.id },
      include: {
        achievements: true,
        users: true,
      },
      orderBy,
      skip,
      take: GAMES_PER_PAGE,
    });

    const totalCount = await prisma.game.count({
      where: { consoleId: console.id },
    });

    return NextResponse.json({
      games: games.map((g) => ({
        id: g.id,
        slug: g.slug,
        title: g.title,
        achievements: g.achievements.length,
        releaseYear: new Date(g.releaseDate || "").getFullYear() || "N/A",
        owners: g.users.length,
        cover: `/games/${g.slug}/cover.png`,
        icon: `/games/${g.slug}/icon.png`,
      })),
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / GAMES_PER_PAGE),
    });
  } catch (err) {
    console.error("Failed to fetch games:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
