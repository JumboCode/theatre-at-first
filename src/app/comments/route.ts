import { InsertComment, SelectComment, comments } from "@/db/schema";
import db from "@/db/drizzle";
import { NextResponse } from "next/server";

// add-comment (POST)
export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);

    //check for missing fields
    if (
        data.timestamp == undefined ||
        data.message == undefined ||
        data.userId == undefined ||
        data.itemId == undefined
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
        let insert_data: InsertComment = {
            timestamp: data.timestamp,
            message: data.message,
            userId: data.userId,
            itemId: data.itemId,
        };
        let result = await db.insert(comments).values(insert_data).returning();
        return NextResponse.json(
            {
                message: `Comment added to the database: ${result.toString()}`,
            },
            {
                status: 200,
            }
        );
    }
}

// get-comments (GET)
export async function GET(req: Request) {
    const req_data = await req.json();

    const itemId = req_data.itemId;
    const text = req_data.message;
    const userId = req_data.user;
    const id = req_data.id;
    const timestamp = req_data.timestamp;

    const result = await db.query.comments.findFirst({
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
                message: `comment ${id} is not found in the database`,
            },
            {
                status: 400,
            }
        );
    }
}
