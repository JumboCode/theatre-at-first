"use client";

import { useEffect, useState } from "react";
import { MouseEventHandler } from "react";
import TagDropdown from "./TagDropdown";

export default function TagEditor({ itemId }: { itemId: number }) {
    const tags: string[] = fetch("/list-tags").then((response) => response.json())
                                              .then((json) => json.results)
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [editing, setEditing] = useState(false);


    const btnClick: MouseEventHandler = (e) => {
        e.preventDefault();
        setEditing(!editing);
    }

    return (<>
        <button className="border-2 border-orange-400 rounded-lg px-6 py-2 bg-orange-50 text-orange-600"
                onClick={btnClick}>
            Edit Tags</button>
        { editing &&
            <div className="border border-orange-400 rounded-lg">
            <TagDropdown tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            </div>
        }
    </>);
}

