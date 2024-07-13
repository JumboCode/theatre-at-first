"use client";
import { useState } from "react";
import TagDropdown from "@/components/tagDropdown";
import ItemInput from "@/components/itemInputForm";
import { InsertItem } from "@/db/schema";
import { ChevronLeft } from "@/components/buttonGraphics";

import ImageCapture from "@/components/imageCaptureAndUploadComponent";
import { revalidatePaths } from "@/app/actions";

interface UploadProps {
    tags: string[];
}

export default function ItemUpload(props: UploadProps) {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState("");

    const handleCancel = () => {
        //clear stored info
        setProductName("");
        setDescription("");
        setSelectedTags([]);
        setImageUrl("");
    };

    const handleAdd = async () => {
        //send stored info to database (using "add" api route)

        const newItem: InsertItem = {
            name: productName,
            category: category,
            desc: description,
            tags: selectedTags,
            imageUrl: imageUrl,
            status: "active",
        };

        try {
            // Send the item object to the database using API
            const response = await fetch("/item", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });

            if (response.ok) {
                // Clear the components if the item was successfully added
                revalidatePaths(["/list-items", "/list-tags", "/list-categories"]);
                setProductName("");
                setDescription("");
                setSelectedTags([]);
            } else {
                // Handle error scenarios
                console.error("Failed to add item:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleImageCapture = async (blob: Blob) => {
        const { presignedUrl, imageUrl } = await (
            await fetch("/upload-presigned-url", {
                method: "POST",
            })
        ).json();

        await fetch(presignedUrl, {
            method: "PUT",
            body: blob,
            headers: {
                "Content-Type": blob.type,
            },
        })
            .then(async (response) => {
                if (!response.ok) {
                    alert("Upload failed: " + (await response.text()));
                }

                setImageUrl(imageUrl);
            })
            .catch((error: Error) => {
                alert(`Upload error: ${error}`);
            });
    };

    const component_x_padding = "p-5 md:px-20 xl:px-80 transition duration-500";

    return (
        <div className="bg-white flex flex-col justify-center">
            <div className={`${component_x_padding} pt-10 pb-5 grid grid-cols divide-y-2`}>
                <div className="flex flex-col gap-2 justify-between">
                    <a href="/inventory" className="flex flex-row gap-2 text-black">
                        <ChevronLeft />
                        Back to inventory list
                    </a>
                    <div className="first:pt-0 text-left text-sm text-neutral-700">
                        <div className="first:pt-0 text-left text-4xl text-neutral-700 font-bold">
                            Add New Item
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${component_x_padding} py-4 last:pb-0 flex w-full text-neutral-700 font-extrabold`}>
                Item Information
            </div>
            <div className={`${component_x_padding} flex flex-col md:flex-row justify-center gap-5`}>
                <div className="border rounded-xl border-solid border-amber-500 w-full bg-orange-50 shadow-xl">
                    <ItemInput
                        productName={productName}
                        setProductName={setProductName}
                        category={category}
                        setCategory={setCategory}
                        description={description}
                        setDescription={setDescription}
                    />
                </div>
                <div className="border rounded-xl border-solid border-amber-500 w-full bg-orange-50 shadow-xl">
                    <TagDropdown
                        tags={props.tags}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />
                </div>
            </div>

            <div
                className={`${component_x_padding} text-neutral-700 font-extrabold mt-6 py-2 last:pb-0 flex w-full`}
            >
                Item Image
            </div>

            <div className={`${component_x_padding} flex justify-start`}>
                {imageUrl ? (
                    <div>
                        <div className="border border-amber-500 p-2 bg-orange-50 rounded-xl">
                            <img src={imageUrl} alt="" className="rounded-lg" />
                        </div>
                        <button
                            className="block border border-amber-500 bg-orange-50 text-sm font-medium px-2 py-1 rounded-xl mx-auto mt-3 text-orange-700"
                            onClick={() => setImageUrl("")}
                        >
                            Retake
                        </button>
                    </div>
                ) : (
                    <ImageCapture imageCallback={handleImageCapture} />
                )}
            </div>

            <div className={`${component_x_padding} flex justify-end py-10`}>
                <button
                    onClick={handleCancel}
                    className="whitespace-nowrap py-1 px-4 h-10 w-22 bg-white rounded-md text-gray-950 text-base border-2 border-solid border-gray-300 mr-4 hover:bg-gray-300 hover: duration-300"
                >
                    {"Cancel"}
                </button>

                <button
                    className="whitespace-nowrap py-1 px-4 h-10 w-[80px] bg-teal-800 rounded-xl font-medium text-white text-base hover:bg-gray-800 hover: duration-300"
                    onClick={handleAdd}
                >
                    {"Save"}
                </button>
            </div>
        </div>
    );
}
