"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";

interface Props {
    productName: string,
    setProductName: Dispatch<SetStateAction<string>>,
    description: string,
    setDescription: Dispatch<SetStateAction<string>>
}

export default function ItemInput(props: Props) {
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);

    const handleBoldClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsBold(!isBold);
    };

    const handleItalicClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsItalic(!isItalic);
    };

    const handleUnderlineClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsUnderlined(!isUnderlined);
    };

    return (
        <div className="bg-white rounded-xl">
            <form className="m-5 w-[600px]">
                <div className="text-gray-400 font-bold">Product Name</div>
                <input
                    className="text-gray-950 rounded border-2"
                    style={{ width: "550px" }}
                    value={props.productName}
                    onChange={(e) => props.setProductName(e.target.value)}
                />
                <div className="mt-4 text-gray-400 font-bold">
                    Product Description
                </div>
                <div className="text-gray-950">
                    <button
                        onClick={handleBoldClick}
                        style={{
                            fontWeight: isBold ? "bold" : "normal",
                            marginRight: "8px",
                        }}
                    >
                        B
                    </button>
                    <button
                        onClick={handleItalicClick}
                        style={{
                            fontStyle: isItalic ? "italic" : "normal",
                            marginRight: "8px",
                        }}
                    >
                        I
                    </button>
                    <button
                        onClick={handleUnderlineClick}
                        style={{
                            textDecoration: isUnderlined ? "underline" : "none",
                            marginRight: "8px",
                        }}
                    >
                        U
                    </button>
                </div>

                <textarea
                    className="text-gray-950 rounded border-2"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                    style={{
                        maxHeight: "200px",
                        height: "200px",
                        width: "550px",
                        fontWeight: isBold ? "bold" : "normal",
                        fontStyle: isItalic ? "italic" : "normal",
                        textDecoration: isUnderlined ? "underline" : "none",
                    }}
                />
                {/* <div className="text-gray-950">
                    <h2>Entered Values</h2>
                    <p>Product Name: {props.productName}</p>
                    <p>Product Description: {props.description}</p>
                </div> */}
            </form>
        </div>
    );
}
