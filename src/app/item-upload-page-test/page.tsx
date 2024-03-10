import ItemUpload from "@/components/itemUploadPage";

export default function testPage() {
    // const cancel = "Cancel";
    // const product = "Add Product";

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
        <main>
            <ItemUpload
                // cancel={cancel}
                // product={product}
                tags={allTags}
            ></ItemUpload>
        </main>
    );
}