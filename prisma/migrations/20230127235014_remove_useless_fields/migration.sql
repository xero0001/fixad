/*
  Warnings:

  - You are about to drop the column `address` on the `PreRegisteredUser` table. All the data in the column will be lost.
  - You are about to drop the column `birthdate` on the `PreRegisteredUser` table. All the data in the column will be lost.
  - You are about to drop the column `extraAddress` on the `PreRegisteredUser` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `PreRegisteredUser` table. All the data in the column will be lost.
  - You are about to drop the column `misc` on the `PreRegisteredUser` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `PreRegisteredUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PreRegisteredUser" DROP COLUMN "address",
DROP COLUMN "birthdate",
DROP COLUMN "extraAddress",
DROP COLUMN "gender",
DROP COLUMN "misc",
DROP COLUMN "zipCode";
