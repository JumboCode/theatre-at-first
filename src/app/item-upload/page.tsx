import ItemUpload from "@/components/itemUploadPage";
import db from "@/db/drizzle";

import Header from "@/components/header";
import Footer from "@/components/footer";


export default async function uploadPage() {
    let result = await db.query.items.findMany({
        columns: {
            tags: true,
        },
    });

    let allTags = [...new Set(result.flatMap((e) => e.tags))];

    return (
        <main className="w-screen min-h-screen bg-white">
            <Header />
            <ItemUpload tags={allTags}></ItemUpload>
            <Footer />
        </main>
    );
}
