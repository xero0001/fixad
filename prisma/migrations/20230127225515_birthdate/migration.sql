/*
  Warnings:

  - You are about to drop the column `birthday` on the `PreRegisteredUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PreRegisteredUser" DROP COLUMN "birthday",
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "zipCode" TEXT NOT NULL DEFAULT '';
