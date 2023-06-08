/*
  Warnings:

  - The `added` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updated` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `excluded` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "added",
ADD COLUMN     "added" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updated",
ADD COLUMN     "updated" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "excluded",
ADD COLUMN     "excluded" DATE NOT NULL;
