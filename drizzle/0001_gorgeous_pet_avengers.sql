ALTER TABLE `users` DROP INDEX `users_openId_unique`;--> statement-breakpoint
ALTER TABLE `contactRequests` DROP FOREIGN KEY `contactRequests_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `contactRequests` DROP FOREIGN KEY `contactRequests_propertyId_properties_id_fk`;
--> statement-breakpoint
ALTER TABLE `contactRequests` DROP FOREIGN KEY `contactRequests_assignedTo_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `feesAndExpenses` DROP FOREIGN KEY `feesAndExpenses_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `feesAndExpenses` DROP FOREIGN KEY `feesAndExpenses_propertyId_properties_id_fk`;
--> statement-breakpoint
ALTER TABLE `feesAndExpenses` DROP FOREIGN KEY `feesAndExpenses_createdBy_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `kycSubmissions` DROP FOREIGN KEY `kycSubmissions_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `kycSubmissions` DROP FOREIGN KEY `kycSubmissions_reviewedBy_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `proofOfFundsSubmissions` DROP FOREIGN KEY `proofOfFundsSubmissions_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `proofOfFundsSubmissions` DROP FOREIGN KEY `proofOfFundsSubmissions_reviewedBy_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `properties` DROP FOREIGN KEY `properties_ownerId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `properties` DROP FOREIGN KEY `properties_assignedAgentId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `propertyViewings` DROP FOREIGN KEY `propertyViewings_propertyId_properties_id_fk`;
--> statement-breakpoint
ALTER TABLE `propertyViewings` DROP FOREIGN KEY `propertyViewings_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `propertyViewings` DROP FOREIGN KEY `propertyViewings_agentId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `savedProperties` DROP FOREIGN KEY `savedProperties_userId_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `savedProperties` DROP FOREIGN KEY `savedProperties_propertyId_properties_id_fk`;
--> statement-breakpoint
ALTER TABLE `altruisticProjects` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `contactRequests` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `feesAndExpenses` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `kycSubmissions` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `proofOfFundsSubmissions` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `properties` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `propertyViewings` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `savedProperties` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `users` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `altruisticProjects` MODIFY COLUMN `beneficiaries` int;--> statement-breakpoint
ALTER TABLE `altruisticProjects` MODIFY COLUMN `startDate` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `altruisticProjects` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `contactRequests` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `feesAndExpenses` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `kycSubmissions` MODIFY COLUMN `submittedAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `proofOfFundsSubmissions` MODIFY COLUMN `submittedAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `properties` MODIFY COLUMN `views` int;--> statement-breakpoint
ALTER TABLE `properties` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `propertyViewings` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `savedProperties` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `lastSignedIn` timestamp NOT NULL DEFAULT 'CURRENT_TIMESTAMP';