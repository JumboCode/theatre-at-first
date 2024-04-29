import db from "@/db/drizzle";

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
