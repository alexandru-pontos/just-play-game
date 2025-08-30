//import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  // Create consoles
  const ps2 = await prisma.console.upsert({
    where: { name: 'PlayStation 2' },
    update: {},
    create: {
      name: 'PlayStation 2',
    },
  });

  const gamecube = await prisma.console.upsert({
    where: { name: 'GameCube' },
    update: {},
    create: {
      name: 'GameCube',
    },
  });

  const mgs3 = await prisma.game.upsert({
    where: { slug: 'metal-gear-solid-3' },
    update: {},
    create: {
      slug: 'metal-gear-solid-3',
      title: 'Metal Gear Solid 3: Snake Eater',
      description: 'Stealth action game set in the Cold War.',
      coverImage: '/games/metal-gear-solid-3/cover.png',
      developer: "Konami Computer Entertainment Japan",
      publisher: "Konami",
      screenshots: [],
      console: { connect: { name: "PlayStation 2" } },
      achievements: {
        create: [
          { title: 'Virtuous Mission Complete', description: 'Finish the prologue.' },
          { title: 'No Alerts Run', description: 'Complete the game without being spotted.' },
        ],
      },
    },
  });

  const melee = await prisma.game.upsert({
    where: { slug: 'smash-bros-melee' },
    update: {},
    create: {
      slug: 'smash-bros-melee',
      title: 'Super Smash Bros. Melee',
      description: 'Fast-paced platform fighting game.',
      coverImage: '/games/smash-bros-melee/cover.png',
      developer: "Nintendo",
      publisher: "Nintendo",
      screenshots: [],
      console: { connect: { name: "GameCube" } },
      achievements: {
        create: [
          { title: 'Unlock All Characters', description: 'Unlock all playable fighters.' },
          { title: 'All-Star Mode Clear', description: 'Beat All-Star Mode on any difficulty.' },
        ],
      },
    },
  });

  console.log('Seed data created');

  seedForum();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function upsertCategory(name: string, position: number) {
  const slug = slugify(name);
  return prisma.forumCategory.upsert({
    where: { slug },
    update: { name, position },
    create: { name, slug, position },
  });
}

async function upsertSubforum(categoryId: string, name: string, position: number, description?: string | null) {
  const slug = slugify(name);
  // Uses the composite unique constraint @@unique([categoryId, slug])
  return prisma.forumSubforum.upsert({
    where: { categoryId_slug: { categoryId, slug } },
    update: { name, position, description: description ?? null },
    create: { categoryId, name, slug, position, description: description ?? null },
  });
}

export async function seedForum() {
  // 1) Categories
  const community = await upsertCategory("Community", 1);
  const ps2       = await upsertCategory("PlayStation 2", 2);
  const gamecube  = await upsertCategory("GameCube", 3);

  // 2) Community subforums
  await Promise.all([
    upsertSubforum(community.id, "Chat", 1, "Talk about anything!"),
    upsertSubforum(community.id, "Site Updates", 2, "News and announcements about the site."),
    upsertSubforum(community.id, "Collector's Corner", 3, "Show off your collections and finds."),
    upsertSubforum(community.id, "Competitions", 4, "Community challenges and events."),
  ]);

  // 3) PS2 subforums
  await Promise.all([
    upsertSubforum(ps2.id, "Game Discussion", 1, "Discuss PS2 games."),
    upsertSubforum(ps2.id, "Achievement Discussion", 2, "Discuss new achievements and strategies."),
    upsertSubforum(ps2.id, "Troubleshooting", 3, "Get help with console or emulator issues."),
  ]);

  // 4) GameCube subforums
  await Promise.all([
    upsertSubforum(gamecube.id, "Game Discussion", 1, "Discuss GameCube games."),
    upsertSubforum(gamecube.id, "Achievement Discussion", 2, "Discuss new achievements and strategies."),
    upsertSubforum(gamecube.id, "Troubleshooting", 3, "Get help with console or emulator issues."),
  ]);

  console.log("Forum categories and subforums seeded.");
}
