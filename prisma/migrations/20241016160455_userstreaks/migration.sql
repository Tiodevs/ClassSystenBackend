-- CreateTable
CREATE TABLE "userstreaks" (
    "id" TEXT NOT NULL,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "lastAccess" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maxStreak" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "userstreaks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userstreaks" ADD CONSTRAINT "userstreaks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
