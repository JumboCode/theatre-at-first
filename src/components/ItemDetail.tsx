"use client";
import { useState } from "react";

interface ItemDetailProps {
    name: string;
    tags: string[];
    description: string;
    status: string;
}

// make request to API to get list of updates
const updates: string[] = ["Update One", "Update Two", "Update Three"];

export default function ItemDetail(props: ItemDetailProps) {
    const [display, setDisplay] = useState(false);

    const handleMouseEnter = () => {
        setDisplay(true);
    };

    const handleMouseLeave = () => {
        setDisplay(false);
    };

    const status_color = props.status == "In Stock" ? "[#11763D]" : "[#DF1642]";

    return (
        <div className="flex flex-col gap-5 items-left text-black">
            <div className="text-4xl font-bold">{props.name}</div>
            <p
                className={`text-sm text-${status_color} border-${status_color} border-2 w-fit px-2 rounded-lg`}
            >
                {props.status}
            </p>
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
