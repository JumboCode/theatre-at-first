/*
 * schema.ts
 * This file defines our database schema. It defines the columns in the tables
 * so that the rest of our code knows the types of every piece of data and act
 * accordingly.
 */

import {
    serial,
    integer,
    date,
    text,
    pgTableCreator,
    pgEnum,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

/*
 * Prepends "inventory_" to all our table names so that if theatre-at-first
 * decides to use their postgres instance for other apps as well they know
 * which tables belong to our application.
 */
const inventoryPostgresTable = pgTableCreator((name) => `inventory_${name}`);

/*
 * We define two enums (essentially custom types) `accessLevel` and `updateType`
 * that are used in the tables below.
 */
export const accessLevel = pgEnum("access_level", ["admin", "user", "viewer"]);
export const updateType = pgEnum("update_type", ["location", "other"]);

export const items = inventoryPostgresTable("items", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    desc: text("description").notNull(),
    tags: text("tags").array().notNull(),
    category: text("category"),
    imageUrl: text("image_url"),
    status: text("status"),
});

export type InsertItem = InferInsertModel<typeof items>;
export type SelectItem = InferSelectModel<typeof items>;
