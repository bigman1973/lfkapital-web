import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, text, decimal, mysqlEnum, json, timestamp, varchar, boolean } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const altruisticProjects = mysqlTable("altruisticProjects", {
	id: int().autoincrement().notNull(),
	title: text().notNull(),
	titleEn: text(),
	titleAr: text(),
	description: text().notNull(),
	descriptionEn: text(),
	descriptionAr: text(),
	goalAmount: decimal({ precision: 15, scale: 2 }).notNull(),
	currentAmount: decimal({ precision: 15, scale: 2 }).default('0').notNull(),
	currency: mysqlEnum(['USD','EUR','AED']).default('EUR').notNull(),
	beneficiaries: int(),
	images: json(),
	status: mysqlEnum(['active','completed','paused']).default('active').notNull(),
	startDate: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	endDate: timestamp({ mode: 'string' }),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export const contactRequests = mysqlTable("contactRequests", {
	id: int().autoincrement().notNull(),
	userId: int(),
	name: text().notNull(),
	email: varchar({ length: 320 }).notNull(),
	phone: varchar({ length: 50 }),
	subject: text().notNull(),
	message: text().notNull(),
	propertyId: int(),
	requestType: mysqlEnum(['general','property_inquiry','viewing_request','consultation']).default('general').notNull(),
	status: mysqlEnum(['new','in_progress','resolved','closed']).default('new').notNull(),
	assignedTo: int(),
	notes: text(),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export const feesAndExpenses = mysqlTable("feesAndExpenses", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(),
	propertyId: int(),
	serviceType: mysqlEnum(['consultation','property_video','travel_expenses','legal_fees','commission','other']).notNull(),
	description: text().notNull(),
	amount: decimal({ precision: 10, scale: 2 }).notNull(),
	currency: mysqlEnum(['USD','EUR','AED']).default('EUR').notNull(),
	status: mysqlEnum(['pending','paid','cancelled']).default('pending').notNull(),
	invoiceUrl: text(),
	paidAt: timestamp({ mode: 'string' }),
	createdBy: int().notNull(),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export const kycSubmissions = mysqlTable("kycSubmissions", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(),
	fullName: text().notNull(),
	dateOfBirth: timestamp({ mode: 'string' }),
	nationality: varchar({ length: 100 }),
	idType: mysqlEnum(['passport','national_id','drivers_license']).notNull(),
	idNumber: varchar({ length: 100 }).notNull(),
	idFrontImage: text(),
	idBackImage: text(),
	selfieImage: text(),
	addressProofImage: text(),
	status: mysqlEnum(['pending','approved','rejected']).default('pending').notNull(),
	reviewedBy: int(),
	reviewNotes: text(),
	submittedAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	reviewedAt: timestamp({ mode: 'string' }),
});

export const proofOfFundsSubmissions = mysqlTable("proofOfFundsSubmissions", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(),
	amount: decimal({ precision: 15, scale: 2 }).notNull(),
	currency: mysqlEnum(['USD','EUR','AED']).default('EUR').notNull(),
	documentType: mysqlEnum(['bank_statement','investment_portfolio','crypto_wallet','other']).notNull(),
	documentUrl: text().notNull(),
	bankName: text(),
	accountNumber: varchar({ length: 100 }),
	status: mysqlEnum(['pending','approved','rejected']).default('pending').notNull(),
	reviewedBy: int(),
	reviewNotes: text(),
	submittedAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	reviewedAt: timestamp({ mode: 'string' }),
	expiresAt: timestamp({ mode: 'string' }),
});

export const properties = mysqlTable("properties", {
	id: int().autoincrement().notNull(),
	title: text().notNull(),
	titleEn: text(),
	titleAr: text(),
	description: text().notNull(),
	descriptionEn: text(),
	descriptionAr: text(),
	price: decimal({ precision: 15, scale: 2 }).notNull(),
	currency: mysqlEnum(['USD','EUR','AED']).default('EUR').notNull(),
	propertyType: mysqlEnum(['villa','penthouse','mansion','estate','apartment','land','commercial']).notNull(),
	bedrooms: int(),
	bathrooms: int(),
	area: decimal({ precision: 10, scale: 2 }),
	areaUnit: mysqlEnum(['sqm','sqft']).default('sqm'),
	location: text().notNull(),
	country: varchar({ length: 100 }).notNull(),
	city: varchar({ length: 100 }).notNull(),
	latitude: decimal({ precision: 10, scale: 7 }),
	longitude: decimal({ precision: 10, scale: 7 }),
	images: json(),
	videoUrl: text(),
	virtualTourUrl: text(),
	features: json(),
	amenities: json(),
	status: mysqlEnum(['available','under_offer','sold','off_market']).default('available').notNull(),
	visibility: mysqlEnum(['public','kyc_required','pof_required','private']).default('kyc_required').notNull(),
	ownerId: int().notNull(),
	assignedAgentId: int(),
	yearBuilt: int(),
	featured: boolean().default(false),
	views: int(),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export const propertyViewings = mysqlTable("propertyViewings", {
	id: int().autoincrement().notNull(),
	propertyId: int().notNull(),
	userId: int().notNull(),
	agentId: int(),
	scheduledAt: timestamp({ mode: 'string' }).notNull(),
	status: mysqlEnum(['scheduled','completed','cancelled','no_show']).default('scheduled').notNull(),
	notes: text(),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export const savedProperties = mysqlTable("savedProperties", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(),
	propertyId: int().notNull(),
	notes: text(),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
});

export const users = mysqlTable("users", {
	id: int().autoincrement().notNull(),
	openId: varchar({ length: 64 }).notNull(),
	name: text(),
	email: varchar({ length: 320 }),
	phone: varchar({ length: 50 }),
	loginMethod: varchar({ length: 64 }),
	role: mysqlEnum(['buyer','seller','internal_agent','partner_agent','admin']).default('buyer').notNull(),
	kycStatus: mysqlEnum(['pending','approved','rejected','not_submitted']).default('not_submitted').notNull(),
	proofOfFundsStatus: mysqlEnum(['pending','approved','rejected','not_submitted']).default('not_submitted').notNull(),
	preferredLanguage: mysqlEnum(['es','en','ar']).default('es').notNull(),
	avatar: text(),
	bio: text(),
	createdAt: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
	lastSignedIn: timestamp({ mode: 'string' }).default('CURRENT_TIMESTAMP').notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Property = typeof properties.$inferSelect;
export type InsertProperty = typeof properties.$inferInsert;
export type KycSubmission = typeof kycSubmissions.$inferSelect;
export type InsertKycSubmission = typeof kycSubmissions.$inferInsert;
export type ProofOfFundsSubmission = typeof proofOfFundsSubmissions.$inferSelect;
export type InsertProofOfFundsSubmission = typeof proofOfFundsSubmissions.$inferInsert;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = typeof contactRequests.$inferInsert;
export type FeeAndExpense = typeof feesAndExpenses.$inferSelect;
export type InsertFeeAndExpense = typeof feesAndExpenses.$inferInsert;
export type AltruisticProject = typeof altruisticProjects.$inferSelect;
export type InsertAltruisticProject = typeof altruisticProjects.$inferInsert;
export type SavedProperty = typeof savedProperties.$inferSelect;
export type InsertSavedProperty = typeof savedProperties.$inferInsert;
export type PropertyViewing = typeof propertyViewings.$inferSelect;
export type InsertPropertyViewing = typeof propertyViewings.$inferInsert;
