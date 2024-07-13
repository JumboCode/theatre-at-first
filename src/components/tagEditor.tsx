"use client";

import { useState } from "react";
import { MouseEventHandler } from "react";
import TagDropdown from "./tagDropdown";
import { revalidatePaths } from "@/app/actions";

export default function TagEditor({ itemId, tags, initialTags }: { itemId: number, tags: string[], initialTags: string[] }) {
    const [selectedTags, setSelectedTags] = useState(initialTags);
    const [editing, setEditing] = useState(false);

    const btnClick: MouseEventHandler = (e) => {
        e.preventDefault();
        setEditing(!editing);
    }

    const saveChanges: MouseEventHandler = (e) => {
        e.preventDefault();

        fetch("/update-tags", {
            method: "POST",
            body: JSON.stringify({
                itemId,
                tags: selectedTags
            })
        })
        .then(res => res.json())
        .then(json => {
            //@ts-ignore
            setSelectedTags(json.tags);
            setEditing(!editing);
            revalidatePaths([`/item/${itemId}`]).then(() => {});
        })
    }

    return (<>
        {!editing && <div className="w-full flex flex-row gap-3 flex-wrap">
        {selectedTags.map((tag) => (
            <span
                key={tag}
                className="border-2 border-black rounded-lg px-6 py-2 bg-gray-50"
            >
                <p>{tag}</p>
            </span>
        ))}
        </div> }
        {!editing && <button className="border-2 border-orange-400 rounded-lg px-6 py-2 bg-orange-50 text-orange-600"
                onClick={btnClick}>
            Edit Tags</button> }
        { editing &&
            <div className="w-full border border-orange-400 rounded-lg">
            <TagDropdown tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            <span className="w-full flex flex-row justify-end"><button onClick={saveChanges}>Save Changes</button></span>
            </div>
        }
    </>);
}

