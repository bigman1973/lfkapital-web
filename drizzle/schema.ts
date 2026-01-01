import { mysqlTable, mysqlSchema, AnyMySqlColumn, bigint, int, text, decimal, mysqlEnum, json, timestamp, varchar, boolean } from "drizzle-orm/mysql-core"
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
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
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
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
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
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
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
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
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
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export const savedProperties = mysqlTable("savedProperties", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(),
	propertyId: int().notNull(),
	notes: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
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
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
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

// ============================================
// EL MÉTODO LF CAPITAL - Sistema de Matching Global
// ============================================

/**
 * Perfiles extendidos de clientes UHNWI para matching inteligente
 */
export const clientProfiles = mysqlTable("clientProfiles", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(), // Referencias users(id)
	netWorthEstimate: bigint({ mode: 'number' }), // Patrimonio neto estimado
	liquidityEvents: json().$type<Array<{type: string, date: string, amount: number}>>(), // Eventos de liquidez
	travelPatterns: json().$type<Array<{location: string, season: string, frequency: string}>>(), // Patrones de viaje
	interests: json().$type<string[]>(), // ["golf", "yachting", "art_collection"]
	currentProperties: json().$type<Array<{location: string, type: string, value: number}>>(), // Propiedades actuales
	preferredRegions: json().$type<string[]>(), // ["Mediterranean", "Caribbean", "Asia"]
	preferredPropertyTypes: json().$type<string[]>(), // ["villa", "penthouse", "beachfront"]
	budgetMin: bigint({ mode: 'number' }),
	budgetMax: bigint({ mode: 'number' }),
	investmentGoals: text(), // Texto libre sobre objetivos
	lastLiquidityEvent: timestamp({ mode: 'string' }),
	probabilityScore: int(), // 0-100, calculado por sistema
	source: varchar({ length: 255 }), // De dónde vino el lead
	notes: text(), // Notas internas
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

/**
 * Sistema de matching automático entre propiedades y clientes
 */
export const propertyMatches = mysqlTable("propertyMatches", {
	id: int().autoincrement().notNull(),
	propertyId: int().notNull(), // Referencias properties(id)
	clientProfileId: int().notNull(), // Referencias clientProfiles(id)
	matchScore: int().notNull(), // 0-100
	matchReasons: json().$type<string[]>(), // ["location_match", "price_range", "lifestyle_fit"]
	contactStatus: mysqlEnum(['not_contacted', 'contacted', 'interested', 'viewing_scheduled', 'offer_made', 'rejected']).default('not_contacted').notNull(),
	lastContactDate: timestamp({ mode: 'string' }),
	nextFollowUpDate: timestamp({ mode: 'string' }),
	assignedAgentId: int(), // Referencias users(id) - agente asignado
	notes: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

/**
 * Red global de agentes colaboradores
 */
export const partnerAgents = mysqlTable("partnerAgents", {
	id: int().autoincrement().notNull(),
	userId: int().notNull(), // Referencias users(id)
	tier: mysqlEnum(['internal', 'partner_elite', 'collaborator']).default('collaborator').notNull(),
	regions: json().$type<string[]>(), // ["Spain", "Portugal", "France"]
	specializations: json().$type<string[]>(), // ["beachfront", "golf_properties", "vineyards"]
	languages: json().$type<string[]>(), // ["es", "en", "fr"]
	transactionsCompleted: int().default(0).notNull(),
	averageSalePrice: bigint({ mode: 'number' }),
	commissionSplit: decimal({ precision: 3, scale: 2 }).default('0.40').notNull(), // 0.40 = 40%
	status: mysqlEnum(['active', 'inactive', 'pending_approval']).default('pending_approval').notNull(),
	companyName: varchar({ length: 255 }),
	licenseNumber: varchar({ length: 100 }),
	website: text(),
	bio: text(),
	approvedBy: int(), // Referencias users(id) - quien aprobó
	approvedAt: timestamp({ mode: 'string' }),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

/**
 * Campañas automatizadas de marketing
 */
export const marketingCampaigns = mysqlTable("marketingCampaigns", {
	id: int().autoincrement().notNull(),
	propertyId: int(), // Referencias properties(id)
	name: varchar({ length: 255 }).notNull(),
	targetClientIds: json().$type<number[]>(), // [123, 456, 789] IDs de clientProfiles
	campaignType: mysqlEnum(['email', 'video', 'event', 'multi_touch']).notNull(),
	status: mysqlEnum(['draft', 'scheduled', 'active', 'completed', 'cancelled']).default('draft').notNull(),
	scheduledDate: timestamp({ mode: 'string' }),
	sentDate: timestamp({ mode: 'string' }),
	openRate: decimal({ precision: 5, scale: 2 }),
	clickRate: decimal({ precision: 5, scale: 2 }),
	responseRate: decimal({ precision: 5, scale: 2 }),
	conversions: int().default(0).notNull(),
	budget: decimal({ precision: 10, scale: 2 }),
	currency: mysqlEnum(['USD','EUR','AED']).default('EUR').notNull(),
	notes: text(),
	createdBy: int().notNull(), // Referencias users(id)
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow().onUpdateNow().notNull(),
});

export type ClientProfile = typeof clientProfiles.$inferSelect;
export type InsertClientProfile = typeof clientProfiles.$inferInsert;
export type PropertyMatch = typeof propertyMatches.$inferSelect;
export type InsertPropertyMatch = typeof propertyMatches.$inferInsert;
export type PartnerAgent = typeof partnerAgents.$inferSelect;
export type InsertPartnerAgent = typeof partnerAgents.$inferInsert;
export type MarketingCampaign = typeof marketingCampaigns.$inferSelect;
export type InsertMarketingCampaign = typeof marketingCampaigns.$inferInsert;
