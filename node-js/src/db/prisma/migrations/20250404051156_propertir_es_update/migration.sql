-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BikeActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "dateTime" DATETIME,
    "title" TEXT NOT NULL,
    "totalTime" TEXT,
    "description" TEXT,
    "distance" REAL NOT NULL,
    "bikeType" TEXT,
    "rideType" TEXT,
    "avgHeartRate" INTEGER,
    CONSTRAINT "BikeActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BikeActivity" ("avgHeartRate", "bikeType", "dateTime", "description", "distance", "id", "rideType", "title", "totalTime", "userId") SELECT "avgHeartRate", "bikeType", "dateTime", "description", "distance", "id", "rideType", "title", "totalTime", "userId" FROM "BikeActivity";
DROP TABLE "BikeActivity";
ALTER TABLE "new_BikeActivity" RENAME TO "BikeActivity";
CREATE TABLE "new_ColdBaths" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "dateTime" DATETIME,
    "title" TEXT,
    "totalTime" TEXT,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "distance" REAL,
    "avgHeartRate" INTEGER,
    CONSTRAINT "ColdBaths_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ColdBaths" ("avgHeartRate", "dateTime", "description", "distance", "id", "totalTime", "type", "userId") SELECT "avgHeartRate", "dateTime", "description", "distance", "id", "totalTime", "type", "userId" FROM "ColdBaths";
DROP TABLE "ColdBaths";
ALTER TABLE "new_ColdBaths" RENAME TO "ColdBaths";
CREATE TABLE "new_RunActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "dateTime" DATETIME,
    "title" TEXT NOT NULL,
    "totalTime" TEXT,
    "description" TEXT,
    "distance" REAL NOT NULL,
    "shoes" TEXT,
    "runType" TEXT,
    "avgHeartRate" INTEGER,
    CONSTRAINT "RunActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RunActivity" ("avgHeartRate", "dateTime", "description", "distance", "id", "runType", "shoes", "title", "totalTime", "userId") SELECT "avgHeartRate", "dateTime", "description", "distance", "id", "runType", "shoes", "title", "totalTime", "userId" FROM "RunActivity";
DROP TABLE "RunActivity";
ALTER TABLE "new_RunActivity" RENAME TO "RunActivity";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
