"use client";
import { useState } from "react";
import ItemInput from "./itemInputForm";
import TagDropdown from "./TagDropdown";
import { InsertItem } from "@/db/schema";
import ImageCapture from "./image-capture-and-upload-component"; 
// import "@/components/ImageCapture"

interface UploadProps {
    tags: string[];
}

export default function ItemUpload(props: UploadProps) {

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    //info need to store: name, desc, tags, imageUrl (get from components)

    // const handleChangeName = (name: string) => {
    //     setProductName(name);
    // };

    // const handleChangeDescription = (desc: string) => {
    //     setDescription(desc);
    // };

    const handleCancel = () => {
        //clear stored info
        setProductName("");
        setDescription("");
        setSelectedTags([]);
    }

    const handleAdd = async () => {
        //send stored info to database (using "add" api route)

        const newItem: InsertItem = {
            name: productName,
            desc: description,
            tags: selectedTags,
            imageUrl: "",
            status: "active"
        };

        try {
            // Send the item object to the database using API
            const response = await fetch('/item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            });
    
            if (response.ok) {
                // Clear the components if the item was successfully added
                setProductName("");
                setDescription("");
                setSelectedTags([]);
            } else {
                // Handle error scenarios
                console.error('Failed to add item:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }

    return (
        <div className="bg-white h-24 overflow-auto overscroll-y-auto overscroll-x-auto min-h-screen">
            <div className="grid grid-cols divide-y-2 ml-20 mr-20">
            <div className="py-10 first:pt-0 text-left text-4xl text-neutral-700 font-bold mt-8">
                Add New Product
            </div>
            <div className="py-8 last:pb-0 flex w-full text-xl text-neutral-700 font-bold">
                Description
                <div className="ml-[570px]">Category</div>
            </div>
            </div>
            

            <div className="flex w-full mt-4 ml-20 mr-20 h-[370px]">
                <div className="bg-orange-50 border-2 rounded-lg border-solid border-gray-200 w-[600px]">
                    <ItemInput productName={productName} setProductName={setProductName} description={description} setDescription={setDescription}></ItemInput>
                </div>
                <div className="bg-orange-50 ml-20 border-2 rounded-lg border-solid border-gray-200 w-[600px]">
                    <TagDropdown tags={props.tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags}></TagDropdown>
                </div>
            </div>

            <div className="ml-20 mt-12 text-xl text-neutral-700 font-bold">Product Image</div>

            <div className="mt-4 ml-20 w-[1280px] h-[370px]">
                <div className="border-2 rounded-lg border-solid border-gray-200 w-full">
                </div>
            </div>
            
            <div>
                <button
                onClick={() => function_name}
                className="">
                    <ImageCapture imageCallback={(_: Blob) => {}}/>
                </button>
            </div>

            <div className="flex mt-16 mb-20 ml-[610px]">
                <button 
                    onClick={handleCancel}
                    className="whitespace-nowrap py-1 px-3 h-10 w-20 bg-white rounded font-medium text-gray-950 text-base border-2 border-solid border-gray-300 mr-4 hover:bg-gray-300 hover: duration-300"
                    >
                    {"Cancel"}
                </button>   
                    
                <button
                    className="whitespace-nowrap py-1 px-4 h-10 w-32 bg-gray-600 rounded font-medium text-white-950 text-base hover:bg-gray-500 hover: duration-300"
                    onClick={handleAdd}
                    >
                    {"Add Product"}
                </button>
                    
            </div>
        </div>
    );
}
