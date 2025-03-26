/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Made the column `nick_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "activityType" TEXT NOT NULL,
    CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RunActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "activityId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "distance" REAL NOT NULL,
    "shoes" TEXT,
    "runType" TEXT NOT NULL,
    CONSTRAINT "RunActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BikeActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "activityId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "distance" REAL NOT NULL,
    "bikeType" TEXT,
    "rideType" TEXT,
    CONSTRAINT "BikeActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "nick_name" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "name", "nick_name") SELECT "id", "name", "nick_name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_nick_name_key" ON "User"("nick_name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "RunActivity_activityId_key" ON "RunActivity"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "BikeActivity_activityId_key" ON "BikeActivity"("activityId");
