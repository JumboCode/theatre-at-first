import ItemUpload from "@/components/itemUploadPage";

export default function testPage() {
    const cancel = "Cancel";
    const product = "Add Product";

    return (
        <main>
            <ItemUpload
                cancel={cancel}
                product={product}
            ></ItemUpload>
        </main>
    );
}