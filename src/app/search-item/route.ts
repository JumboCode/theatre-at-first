import { SelectItem, items } from "@/db/schema";
import db from "@/db/drizzle";
import { or, like, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET request - search-items
export async function GET(
    request: Request,
    { params }: { params: { string_query : string } }
) {


    db.query.items.findMany({
        columns: {
            name: true,
            desc: true,
            tags: true,
        },

        where: (or(
                    like(items.name, params.string_query), 
                    like(items.desc, params.string_query), 
                    inArray(items.tags, params.string_query)
                ))

        // where: {
        //         like(items.name, string_query),
        //         like(items.desc, string_query),
        //         eq(items.tags, filter_query),
        // }

    });

    db.select

    let 


    return Response.json({


    });
}