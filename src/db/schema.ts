/*
* schema.ts
* This file defines our database schema. It defines the columns in the tables
* so that the rest of our code knows the types of every piece of data and act
* accordingly.
*/

import { serial, integer, date, text, pgTableCreator, pgEnum } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm"

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

/*
* Defining the shape of the `users` table, which holds all the info about users:
* Their name, emmil, and what type of user they are. The `.notNull()` function
* indicates that this value must be assigned (it can't be what you might think
* of as an empty cell in the table).
*/
export const users = inventoryPostgresTable("users", {
    id: serial("id").primaryKey(),
    access: accessLevel("access").notNull(),
    firstname: text("firstname").notNull(),
    lastname: text("lastname").notNull(),
    email: text("email").notNull(),
});

export const comments = inventoryPostgresTable("comments", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(() => users.id),
    timestamp: date("timestamp").notNull(),
    message: text("message").notNull(),
    itemId: integer("item_id").references(() => items.id).notNull(),
});

export const updates = inventoryPostgresTable("updates", {
    id: serial("id").primaryKey(),
    timestamp: date("timestamp").notNull(),
    message: text("message").notNull(),
    itemId: integer("item_id").references(() => items.id).notNull(),
    updateType: updateType("updateType").notNull(),
});

export const items = inventoryPostgresTable("items", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    desc: text("desc").notNull(),
    tags: text("tags").array().notNull(),
    imageUrl: text("image_url"),
    status: text("status"),
});

export type InsertUser = InferInsertModel<typeof users>;
export type SelectUser = InferSelectModel<typeof users>;

export type InsertComment = InferInsertModel<typeof comments>;
export type SelectComment = InferSelectModel<typeof comments>;

export type InsertUpdate = InferInsertModel<typeof updates>;
export type SelectUpdate = InferSelectModel<typeof updates>;

export type InsertItem = InferInsertModel<typeof items>;
export type SelectItem = InferSelectModel<typeof items>;
