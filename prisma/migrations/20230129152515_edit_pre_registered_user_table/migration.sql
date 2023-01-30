/*
  Warnings:

  - Added the required column `accountType` to the `PreRegisteredUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ACCOUNT_TYPE" AS ENUM ('EMAIL', 'KAKAO', 'NAVER', 'GOOGLE');

-- AlterTable
ALTER TABLE "PreRegisteredUser" ADD COLUMN     "accountType" "ACCOUNT_TYPE" NOT NULL;
