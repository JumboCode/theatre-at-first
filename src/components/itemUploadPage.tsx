"use client";
import { useState } from "react";
import ItemInput from "./itemInputForm";
import TagDropdown from "./TagDropdown";
import { InsertItem } from "@/db/schema";
// import ImageCapture from "./"




interface buttons {
    cancel: string;
    product: string;
}

export default function ItemUpload(props: buttons) {

    // const 

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
        <div className="bg-white h-24 overflow-visible">
            <div className="flex-grow">
                <ItemInput></ItemInput>
            </div>
            <div className="ml-4">
                <TagDropdown tags={allTags}></TagDropdown>
            </div>
            <button 
            // onClick={}
            className="font-sans h-10 w-20 bg-white rounded text-gray-950 text-base border border-solid border-gray-300 mr-4 hover:bg-gray-300 hover: duration-300"
            >
                {props.cancel}
            </button>   
            <button
            className="font-sans h-10 w-32 bg-gray-600 rounded text-white-950 text-base hover:bg-gray-500 hover: duration-300"
            // onClick={}
            >
                {props.product}
            </button>
        </div>
    );
}