"use client";
import { useState } from "react";
import TagEditor from "./tagEditor";

interface ItemDetailProps {
    id: number;
    name: string;
    category: string;
    tags: string[];
    allTags: string[];
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
                {props.category}
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
                <TagEditor itemId={props.id} tags={props.allTags} initialTags={props.tags} />
            </div>
            <hr style={{ borderTop: "1px solid #888888" }} />
            <div>
                <div className="text-xl font-bold mb-5">Description</div>
                {props.description}
            </div>
        </div>
    );
}
