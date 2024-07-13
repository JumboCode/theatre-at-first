import db from "@/db/drizzle";
import { items } from "@/db/schema";
import { eq } from "drizzle-orm";
import S3 from "aws-sdk/clients/s3.js";

export async function POST(req: Request) {
    const data = await req.json();
    const id = data.itemId;

    const item = await db.query.items.findFirst({ where: eq(items.id, id) });
    await db.delete(items).where(eq(items.id, id));

    if (item && item.imageUrl) {
        try {
            const filename = item.imageUrl.slice(`${process.env.R2_PUBLIC_BASE_URL}/`.length);
            console.log(filename);

            const s3 = new S3({
                endpoint: process.env.R2_ENDPOINT,
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
                signatureVersion: "v4",
            });
            await s3.getSignedUrlPromise("deleteOject", {
                Bucket: process.env.R2_BUCKET,
                Key: filename,
            })
        } catch {}
    }

    return Response.json({ success: true });
}
