import ItemUpload from "@/components/itemUploadPage";

export default async function testPage() {
    let result = await db.query.items.findMany({
        columns: {
            tags: true,
        },
    });

    let allTags = [...new Set(result.flatMap((e) => e.tags))];

    return (
        <main className="w-screen min-h-screen bg-white">
            <ItemUpload tags={allTags}></ItemUpload>
        </main>
    );
}
