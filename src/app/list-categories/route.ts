import db from "@/db/drizzle";

export async function GET(_request: Request, _params: {}) {
    let results = await db.query.items.findMany({
        columns: {
            category: true,
        },
    });

    let allCategories = [...new Set(results.flatMap((s) => s.category))];
    allCategories = allCategories.filter(c => c != null);

    return Response.json({
        results: allCategories,
    });
}
