/*
  Warnings:

  - Added the required column `developer` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "developer" TEXT NOT NULL,
ADD COLUMN     "publisher" TEXT NOT NULL,
ADD COLUMN     "screenshots" TEXT[];
