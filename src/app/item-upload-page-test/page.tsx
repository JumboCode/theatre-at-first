import ItemUpload from "@/components/itemUploadPage";

export default function testPage() {
    const allTags = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "oneone",
    ];

    return (
        <main className="w-screen min-h-screen bg-white">
            <ItemUpload tags={allTags}></ItemUpload>
        </main>
    );
}
