/*
  Warnings:

  - Added the required column `billingCity` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billingPostalCode` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billingState` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billingStreet` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corporateNumber` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `representativeName` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `representativeTitle` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingCity` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingPostalCode` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingState` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingStreet` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` ADD COLUMN `billingCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `billingPostalCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `billingState` VARCHAR(191) NOT NULL,
    ADD COLUMN `billingStreet` VARCHAR(191) NOT NULL,
    ADD COLUMN `corporateNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `representativeName` VARCHAR(191) NOT NULL,
    ADD COLUMN `representativeTitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingPostalCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingState` VARCHAR(191) NOT NULL,
    ADD COLUMN `shippingStreet` VARCHAR(191) NOT NULL,
    ADD COLUMN `website` VARCHAR(191) NOT NULL;
