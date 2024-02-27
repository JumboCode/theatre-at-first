import { SelectItem, items } from "@/db/schema";
import db from "@/db/drizzle";
import { or, like, inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//     // let results = await db.query.items.findMany();
//     // return Response.json(results);
//     const data = await request.json();
//     const result = await db.query.items.findMany();
//     return NextResponse.json({
//         results: result
//     });
// }

//GET request - search-items
export async function GET(
    request: Request,
    { params }: { params: { query: string, tags: string } }
) {
    // let params = {
    //     string_query: "crown"
    // }

    // let results = await db.query.items.findMany();
    // const item_name: string = items.name.toString();
    // const lowerName: string = item_name.toLowerCase();

    let results = await db.query.items.findMany({
         columns: {
             id: true,
             name: true,
             desc: true,
             tags: true,
         },

        // where: (or(
        //     like(items.name, ("%" + params.string_query.toLowerCase() + "%")), 
        //     like(items.desc, ("%" + params.string_query.toLowerCase() + "%")),
        // ))
    });

        // where: (or(
        //     like(items.name, params.string_query), 
        //     like(items.desc, params.string_query),
        // ))

        // where: {
        //         like(items.name, string_query),
        //         like(items.desc, string_query),
        //         eq(items.tags, filter_query),
        // }

    // });

    return Response.json({
        results: results
    });
}

/**
 CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[] NOT NULL,
  image_url TEXT,
  status TEXT);

  INSERT INTO table_name (column1, column2, column3) 
  VALUES ( value1, value2, value3);
 */