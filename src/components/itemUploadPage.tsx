"use client";
import { useState } from "react";
import ItemInput from "./itemInputForm";
import TagDropdown from "./TagDropdown";
import { InsertItem } from "@/db/schema";
import { ChevronLeft } from "./Button-Graphics";
import { Image } from "./Button-Graphics";

import ImageCapture from "./image-capture-and-upload-component";

// import "@/components/ImageCapture"

interface UploadProps {
    tags: string[];
    show_camera: boolean;
}

export default function ItemUpload(props: UploadProps) {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    //info need to store: name, desc, tags, imageUrl (get from components)

    // const handleChangeName = (name: string) => {
    //     setProductName(name);
    // };

    const handleImageFile = () => {
        props.show_camera = true;
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

    return (
        <div className="bg-white h-24 overflow-auto overscroll-y-auto overscroll-x-auto min-h-screen">
            <div className="grid grid-cols divide-y-2 ml-20 mr-20">
                <div className="py-10 flex flex-row">
                    <div>
                        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent">
                            <ChevronLeft></ChevronLeft>
                        </button>
                    </div>
                    <div className="first:pt-0 text-left text-sm text-neutral-700">
                        Back to inventory list
                        <div className="first:pt-0 text-left text-4xl text-neutral-700 font-bold">
                            Add New Product
                        </div>
                    </div>
                </div>
                <div className="py-8 last:pb-0 flex w-full text-neutral-700 font-extrabold">
                    Description
                    <div className="ml-[550px]">Category</div>
                </div>
            </div>

            <div className="flex w-full mt-2 ml-20 mr-20 h-[370px]">
                <div className="border rounded-xl border-solid border-amber-500 w-[600px] bg-orange-50 shadow-xl">
                    <ItemInput
                        productName={productName}
                        setProductName={setProductName}
                        description={description}
                        setDescription={setDescription}
                    ></ItemInput>
                </div>
                <div className="ml-10 mt-6 border rounded-xl border-solid border-amber-500 w-[600px] bg-orange-50 h-[320px] shadow-xl">
                    <TagDropdown
                        tags={props.tags}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    ></TagDropdown>
                </div>
            </div>

            <div className="ml-20 text-neutral-700 font-extrabold mt-6 py-2 last:pb-0 flex w-full">
                Product Image
            </div>

            <div className="flex justify-start ml-20">
                {props.show_camera ? (
                    <ImageCapture imageCallback={(blob) => {}}></ImageCapture>
                ) : (
                    <button
                        className="border-dashed border-2 font-bold w-[1240px] h-[500px] bg-orange-50 rounded-2xl border-amber-500 shadow-xl flex flex-col justify-center items-center"
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

            <div className="flex mt-20 mb-10 ml-[610px]">
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
