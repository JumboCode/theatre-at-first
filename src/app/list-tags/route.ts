import db from "@/db/drizzle";

//GET request - search-items
export async function GET(_request: Request, _params: {}) {
    let results = await db.query.items.findMany({
        columns: {
            tags: true,
        },
    });

    let allTags = [...new Set(results.flatMap((e) => e.tags))];

    return Response.json({
        results: allTags,
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
