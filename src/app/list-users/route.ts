import db from "@/db/drizzle";

export async function GET(_request: Request, _params: any) {
    let results = await db.query.users.findMany({
        columns: {
            id: true,
            access: true,
            firstname: true,
            lastname: true,
            email: true,
        },
    });

    return Response.json({
        results: results,
    });
}
