"use client";
import { useState } from "react";

interface ItemDetailTestProps {
    name: string;
    tags: string[];
    description: string;
    status: string;
}

// make request to API to get list of updates
const updates: string[] = ["Update One", "Update Two", "Update Three"];

export default function ItemDetail(props: ItemDetailTestProps) {
    const [display, setDisplay] = useState(false);

    const handleMouseEnter = () => {
        setDisplay(true);
    };

    const handleMouseLeave = () => {
        setDisplay(false);
    };

    return (
            <div className="flex flex-col gap-10 items-left p-10 bg-white w-[50%] text-black">
                <div className="text-4xl font-bold">{props.name}</div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {props.status}
                </div>
                <div>
                    {display && (
                        <div className="">
                            {updates.map((update) => (
                                <div key={update} className="py-2">
                                    <p>{update}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex flex-row gap-6 flex-wrap">
                    {props.tags.map((tag) => (
                        <div
                            key={tag}
                            className="border-2 border-black rounded-lg px-6 py-2 bg-gray-50"
                        >
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
                <hr style={{ borderTop: "1px solid #888888" }} />
                <div>
                    <div className="text-xl font-bold mb-5">Description</div>
                    {props.description}
                </div>
            </div>
    );
}
