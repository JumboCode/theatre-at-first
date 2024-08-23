import { InsertItem, items } from "@/db/schema";
import db from "@/db/drizzle";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    let name: string = data.name;
    let category: string = data.category;
    let desc: string = data.desc;
    let tags: string[] = data.tags;
    let imageUrl: string = data.imageUrl;
    let status: string = data.status;

    //check for missing fields
    if (name == undefined || desc == undefined || tags == undefined) {
        return NextResponse.json(
            {
                message: "Missing fields!",
            },
            {
                status: 400,
            }
        );
    } else {
        let item: InsertItem = {
            name,
            category,
            desc,
            tags,
            status,
            imageUrl,
        };

        let result = await db.insert(items).values(item).returning();
        return NextResponse.json(
            {
                message: `Item added to the database: ${result.toString()}`,
            },
            {
                status: 200,
            }
        );
    }
}
