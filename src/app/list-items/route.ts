import db from "@/db/drizzle";

export async function GET(_request: Request, _params: {}) {
    let results = await db.query.items.findMany({
        columns: {
            id: true,
            name: true,
            desc: true,
            imageUrl: true,
            tags: true,
        },
    });

    return Response.json({
        results: results,
    });
}
