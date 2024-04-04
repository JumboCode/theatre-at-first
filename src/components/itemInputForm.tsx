"use client";
import { Dispatch, SetStateAction } from "react";

interface Props {
    productName: string;
    setProductName: Dispatch<SetStateAction<string>>;
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
}

export default function ItemInput(props: Props) {
    return (
        <div className="bg-orange-50 rounded-xl">
            <form className="m-5">
                <div className="text-amber-700 font-bold mb-3 text-sm">
                    Name
                </div>
                <input
                    className="text-gray-950 rounded-lg border border-amber-400 text-xs font-light pl-3 pr-3 py-3 focus:placeholder-gray-800 focus:outline-none"
                    style={{ width: "100%" }}
                    placeholder="Enter Text Here..."
                    value={props.productName}
                    onChange={(e) => props.setProductName(e.target.value)}
                />
                <div className="mt-4 text-amber-700 font-bold mb-3 text-sm">
                    Description
                </div>

                <textarea
                    className="text-gray-950 rounded-lg border border-amber-400 text-xs font-light pl-3 pr-3 py-3 focus:placeholder-gray-800 focus:outline-none"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                    style={{
                        maxHeight: "200px",
                        height: "200px",
                        width: "100%",
                    }}
                    placeholder="Enter Text Here..."
                />
            </form>
        </div>
    );
}
