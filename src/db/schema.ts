import { serial, integer, date, text, pgTableCreator, pgEnum} from "drizzle-orm/pg-core";

const inventoryPostgresTable = pgTableCreator((name) => `inventory_${name}`);

export const accessLevel = pgEnum("access_level", ["admin", "user", "viewer"]);
export const updateType = pgEnum("update_type", ["location", "other"]);

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
