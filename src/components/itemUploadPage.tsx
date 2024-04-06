"use client";
import { useState } from "react";
import ItemInput from "@/components/itemInputForm";
import TagDropdown from "@/components/TagDropdown";
import { InsertItem } from "@/db/schema";
import { ChevronLeft } from "@/components/Button-Graphics";
import { Image } from "@/components/Button-Graphics";

import ImageCapture from "@/components/image-capture-and-upload-component";

interface UploadProps {
    tags: string[];
}

export default function ItemUpload(props: UploadProps) {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [showCamera, setShowCamera] = useState(false);

    //info need to store: name, desc, tags, imageUrl (get from components)

    // const handleChangeName = (name: string) => {
    //     setProductName(name);
    // };

    const handleImageFile = () => {
        setShowCamera(true);
    };

    // const handleChangeDescription = (desc: string) => {
    //     setDescription(desc);
    // };

    const handleCancel = () => {
        //clear stored info
        setProductName("");
        setDescription("");
        setSelectedTags([]);
    };

    const handleAdd = async () => {
        //send stored info to database (using "add" api route)

        const newItem: InsertItem = {
            name: productName,
            desc: description,
            tags: selectedTags,
            imageUrl: "",
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

    const component_x_padding = "px-20 xl:px-80 transition duration-500";

    return (
        <div className="bg-white flex flex-col justify-center">
            <div
                className={`${component_x_padding} pt-10 pb-5 grid grid-cols divide-y-2`}
            >
                <div className="flex flex-col gap-2 justify-between">
                    <button className="flex flex-row gap-2">
                        <ChevronLeft />
                        <span className="text-black">
                            Back to inventory list
                        </span>
                    </button>
                    <div className="first:pt-0 text-left text-sm text-neutral-700">
                        <div className="first:pt-0 text-left text-4xl text-neutral-700 font-bold">
                            Add New Item
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`${component_x_padding} py-4 last:pb-0 flex w-full text-neutral-700 font-extrabold`}
            >
                Item Information
            </div>
            <div
                className={`${component_x_padding} flex flex-col justify-center md:flex-row gap-5`}
            >
                <div className="border rounded-xl border-solid border-amber-500 w-full bg-orange-50 shadow-xl">
                    <ItemInput
                        productName={productName}
                        setProductName={setProductName}
                        description={description}
                        setDescription={setDescription}
                    ></ItemInput>
                </div>
                <div className="border rounded-xl border-solid border-amber-500 w-full bg-orange-50 shadow-xl">
                    <TagDropdown
                        tags={props.tags}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    ></TagDropdown>
                </div>
            </div>

            <div
                className={`${component_x_padding} text-neutral-700 font-extrabold mt-6 py-2 last:pb-0 flex w-full`}
            >
                Item Image
            </div>

            <div className={`${component_x_padding} flex justify-start`}>
                {showCamera ? (
                    <ImageCapture imageCallback={(blob) => {}}></ImageCapture>
                ) : (
                    <button
                        className="border-dashed border-2 font-bold w-full h-[500px] bg-orange-50 rounded-2xl border-amber-500 shadow-xl flex flex-col justify-center items-center "
                        onClick={handleImageFile}
                    >
                        <div>
                            <Image></Image>
                        </div>
                        <div className="flex flex-row mt-1">
                            <div className="text-amber-700 pr-1">
                                Upload a file
                            </div>
                            <div className="text-brown_color">
                                or drag and drop
                            </div>
                        </div>
                        <div className="text-brown_color font-light flex flex-col 2 mt-1">
                            PNG, JPG, GIF files are allowed
                        </div>
                    </button>
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
