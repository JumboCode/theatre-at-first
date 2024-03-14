"use client";
import { Dispatch, SetStateAction } from "react";

interface Props {
    productName: string,
    setProductName: Dispatch<SetStateAction<string>>,
    description: string,
    setDescription: Dispatch<SetStateAction<string>>
}

export default function ItemInput(props: Props) {
    return (
        <div className="bg-orange-50 rounded-xl">
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

                <textarea
                    className="text-gray-950 rounded border-2"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                    style={{
                        maxHeight: "200px",
                        height: "200px",
                        width: "550px",
                    }}
                />
            </form>
        </div>
    );
}
