/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `activityId` on the `BikeActivity` table. All the data in the column will be lost.
  - You are about to drop the column `activityId` on the `RunActivity` table. All the data in the column will be lost.
  - Added the required column `userId` to the `BikeActivity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `RunActivity` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Activity";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BikeActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "distance" REAL NOT NULL,
    "bikeType" TEXT,
    "rideType" TEXT,
    CONSTRAINT "BikeActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BikeActivity" ("bikeType", "dateTime", "description", "distance", "id", "rideType", "title") SELECT "bikeType", "dateTime", "description", "distance", "id", "rideType", "title" FROM "BikeActivity";
DROP TABLE "BikeActivity";
ALTER TABLE "new_BikeActivity" RENAME TO "BikeActivity";
CREATE UNIQUE INDEX "BikeActivity_userId_key" ON "BikeActivity"("userId");
CREATE TABLE "new_RunActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "distance" REAL NOT NULL,
    "shoes" TEXT,
    "runType" TEXT NOT NULL,
    CONSTRAINT "RunActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RunActivity" ("dateTime", "description", "distance", "id", "runType", "shoes", "title") SELECT "dateTime", "description", "distance", "id", "runType", "shoes", "title" FROM "RunActivity";
DROP TABLE "RunActivity";
ALTER TABLE "new_RunActivity" RENAME TO "RunActivity";
CREATE UNIQUE INDEX "RunActivity_userId_key" ON "RunActivity"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
