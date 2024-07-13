import db from "@/db/drizzle";

export async function GET(_request: Request, _params: {}) {
    let results = await db.query.items.findMany();

    return Response.json({
        results: results,
    });
}
