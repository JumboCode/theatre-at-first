"use client";

import ImageCapture from "../../components/image-capture-and-upload-component";

export default function Home() {
    return (
        <main className="justify-between p-24">
            <ImageCapture
                imageCallback={(imageBlob) => {
                    const url = window.URL.createObjectURL(imageBlob);
                    const link = document.createElement('a');
                    link.href = url
                    link.download = "image.jpeg"
                    link.click()
                    window.URL.revokeObjectURL(url);
                }}
            />
        </main>
    );
}
