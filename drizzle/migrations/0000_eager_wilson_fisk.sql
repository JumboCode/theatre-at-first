DO $$ BEGIN
 CREATE TYPE "access_level" AS ENUM('admin', 'user', 'viewer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "update_type" AS ENUM('location', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"timestamp" date NOT NULL,
	"message" text NOT NULL,
	"item_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"tags" text[] NOT NULL,
	"image_url" text,
	"status" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory_updates" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp" date NOT NULL,
	"message" text NOT NULL,
	"item_id" integer NOT NULL,
	"updateType" "update_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"access" "access_level" NOT NULL,
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inventory_comments" ADD CONSTRAINT "inventory_comments_user_id_inventory_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "inventory_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inventory_comments" ADD CONSTRAINT "inventory_comments_item_id_inventory_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "inventory_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inventory_updates" ADD CONSTRAINT "inventory_updates_item_id_inventory_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "inventory_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
