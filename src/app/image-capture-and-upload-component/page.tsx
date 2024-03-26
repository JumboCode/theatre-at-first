"use client";

import ImageCapture from "../../components/image-capture-and-upload-component";

export default function Home() {
    return (
        <main className="justify-between p-24">
            <div id="imageParent"></div>
            <ImageCapture
                imageCallback={(imageBlob) => {
                    imageBlob.text().then((imgData) => {
                        let imgParent = document.getElementById("imageParent");
                        if (imgParent) {
                            imgParent.innerHTML = `<img src="${imgData}"></img>`;
                        }
                    })
                }}
            />
        </main>
    );
}
