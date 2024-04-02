import { SelectItem, items } from "@/db/schema";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    let id: number = +request.nextUrl.searchParams.get("id");
    console.log(id);

    //retrieve from database !!

    let name: string = "book";
    let desc: string = "a prop book";
    let tags: string[] = ["book"];
    let imageUrl: string = "https://example.com";
    let status: string = "ready";

    return NextResponse.json({
        id: id,
        name: name,
        desc: desc,
        tags: tags,
        imageUrl: imageUrl,
        status: status,
    });
}
