import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { users } from "../drizzle/schema";
import { ENV } from './_core/env';

type InsertUser = typeof users.$inferInsert;
type User = typeof users.$inferSelect;

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "phone", "loginMethod", "avatar", "bio"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    } else {
      // Default role for new users
      values.role = 'buyer';
      updateSet.role = 'buyer';
    }
    
    if (user.kycStatus !== undefined) {
      values.kycStatus = user.kycStatus;
      updateSet.kycStatus = user.kycStatus;
    }
    
    if (user.proofOfFundsStatus !== undefined) {
      values.proofOfFundsStatus = user.proofOfFundsStatus;
      updateSet.proofOfFundsStatus = user.proofOfFundsStatus;
    }
    
    if (user.preferredLanguage !== undefined) {
      values.preferredLanguage = user.preferredLanguage;
      updateSet.preferredLanguage = user.preferredLanguage;
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date().toISOString();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date().toISOString();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string): Promise<User | undefined> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number): Promise<User | undefined> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserRole(userId: number, role: User['role']): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update user role: database not available");
    return;
  }

  await db.update(users).set({ role }).where(eq(users.id, userId));
}

export async function updateUserKycStatus(userId: number, status: User['kycStatus']): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update KYC status: database not available");
    return;
  }

  await db.update(users).set({ kycStatus: status }).where(eq(users.id, userId));
}

export async function updateUserPofStatus(userId: number, status: User['proofOfFundsStatus']): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update POF status: database not available");
    return;
  }

  await db.update(users).set({ proofOfFundsStatus: status }).where(eq(users.id, userId));
}
