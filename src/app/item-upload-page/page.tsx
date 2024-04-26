import ItemUpload from "@/components/itemUploadPage";
import { SelectItem } from "@/db/schema";
import db from "@/db/drizzle";

export default async function uploadPage() {
    let result = await db.query.items.findMany({
        columns: {
            tags: true,
        },
    });

    let allTags = [...new Set(result.flatMap((e: SelectItem) => e.tags))];

    return (
        <main className="w-screen min-h-screen bg-white">
            <ItemUpload tags={allTags}></ItemUpload>
        </main>
    );
}
