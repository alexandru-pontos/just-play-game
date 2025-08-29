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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
