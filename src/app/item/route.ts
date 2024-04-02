import { InsertItem, items } from "@/db/schema";
import db from "@/db/drizzle";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);
    let name: string = data.name;
    let desc: string = data.desc;
    let tags: string[] = data.tags;
    let imageUrl: string = data.imageUrl;
    let status: string = data.status;

    //check for missing fields
    if (
        name == undefined ||
        desc == undefined ||
        tags == undefined ||
        imageUrl == undefined ||
        status == undefined
    ) {
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

export async function GET(req: Request) {
    const req_data = await req.json();
    const id = req_data.item_id;
    const result = await db.query.items.findFirst({
        with: {
            id: id,
        },
    });

    if (result) {
        return NextResponse.json(
            {
                message: result,
            },
            {
                status: 200,
            }
        );
    } else {
        return NextResponse.json(
            {
                message: `item ${id} is not found in the database`,
            },
            {
                status: 400,
            }
        );
    }
}
