/*
  Warnings:

  - You are about to alter the column `name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "added" SET DATA TYPE DATE,
ALTER COLUMN "updated" SET DATA TYPE DATE,
ALTER COLUMN "excluded" SET DATA TYPE DATE;
