/*
  Warnings:

  - A unique constraint covering the columns `[userGameId,achievementId]` on the table `UserAchievement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserAchievement_userGameId_achievementId_key" ON "UserAchievement"("userGameId", "achievementId");
