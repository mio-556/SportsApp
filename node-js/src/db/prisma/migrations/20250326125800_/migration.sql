/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "BikeActivity" ADD COLUMN "totalTime" TEXT;

-- AlterTable
ALTER TABLE "RunActivity" ADD COLUMN "totalTime" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ColdBaths" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL,
    "totalTime" TEXT,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "distance" REAL,
    CONSTRAINT "ColdBaths_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
