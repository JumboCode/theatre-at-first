import db from "@/db/drizzle";
import { items } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    let { itemId, tags } = await req.json();
    let result = await db.update(items)
                         .set({ tags })
                         .where(eq(items.id, itemId))
                         .returning();

    return Response.json(result[0]);
}
