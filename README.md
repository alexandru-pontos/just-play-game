# Just Play Game - Retro game achievement & library tracking

Site-ul are rolul de a oferi utilizatorilor o modalitate de a cataloga jocurile retro pe care le detin, si de a completa o lista de achievement-uri pentru aceste jocuri.

Se mai pune la dispozitia utilizatorilor si un forum de discutie, cu mai multe sectiuni dedicate diferitelor aspecte ale acestui hobby.

Site-ul a fost realizat cu [Next.js](https://nextjs.org), si foloseste [PostgreSQL](https://www.postgresql.org/) pentru a gestiona datele legate de utilizatori si de biblioteca de jocuri si de achievement-uri. Legatura cu baza de date se face prin [Prisma](https://www.prisma.io/), cu inca alte cateva module precum [Auth.js](https://authjs.dev/getting-started), [Recharts](https://recharts.org/en-US/), si altele.

## TODO

- Switch-ul intre light mode si dark mode nu functioneaza
- Pentru a functiona Prisma, `DATABASE_URL` din fisierul `.env` trebuie modificat pentru a face legatura cu serverul local.

## Getting Started

1. Pregatiti mediul

```bash
npm install
```

2. Pregatiti Prisma

```bash
npx prisma migrate dev --name init
npx prisma db seed
npx prisma generate
```

3. Porniti serverul

```bash
npm run dev
```

Apoi accesati [http://localhost:3000](http://localhost:3000).
