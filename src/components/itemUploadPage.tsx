"use client";
import { useState } from "react";
import ItemInput from "./itemInputForm";
import TagDropdown from "./TagDropdown";
import { InsertItem, items } from "@/db/schema";
// import ImageCapture from "./"

interface UploadProps {
    cancel: string;
    product: string;
    tags: string[];
}

export default function ItemUpload(props: UploadProps) {

    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [searchInput, setSelectedTags] = useState<string[]>([]);
    const [clearForm, setClearForm] = useState(false);

    //info need to store: name, desc, tags, imageUrl (get from components)

    const handleChangeName = (name: string) => {
        setProductName(name);
    };

    const handleChangeDescription = (desc: string) => {
        setDescription(desc);
    };

    const handleCancel = () => {
        //clear stored info
        setProductName("");
        setDescription("");
    }

    const handleAdd = () => {
        //send stored info to database (using "add" api route)
        
    }

    return (
        <div className="bg-white h-24 overflow-visible min-h-screen flex flex-col justify-between">
            <div className="flex w-full justify-center mt-12">
                <div className="border-2 rounded-lg border-solid border-gray-200 w-[600px]">
                    <ItemInput productName={productName} setProductName={setProductName} description={description} setDescription={setDescription}></ItemInput>
                </div>
                <div className="ml-12 border-2 rounded-lg border-solid border-gray-200 w-[600px]">
                    <TagDropdown tags={props.tags}></TagDropdown>
                </div>
            </div>

            <div className="flex justify-center mb-8">
                <button 
                    onClick={handleCancel}
                    className="font-sans h-10 w-20 bg-white rounded text-gray-950 text-base border-2 border-solid border-gray-300 mr-4 hover:bg-gray-300 hover: duration-300"
                    >
                    {props.cancel}
                </button>   
                    
                <button
                    className="font-sans h-10 w-32 bg-gray-600 rounded text-white-950 text-base hover:bg-gray-500 hover: duration-300"
                    onClick={handleAdd}
                    >
                    {props.product}
                </button>
                    
            </div>
        </div>
    );
}