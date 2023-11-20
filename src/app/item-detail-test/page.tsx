"use client"
import { useState } from "react";

export default function ItemDetailTest(name: string, tags: string[], 
                                       description: string, status: string) {

    // make request to API to get list of updates
    const updates: string[] = ["Update One", "Update Two", "Update Three"]; 

    name = "Item Name";
    tags = ["tag1", "longtag2", "reallyreallylongtag3", "tag4"];
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    status = "Most Recent Status";

    const [display, setDisplay] = useState(false);
    
    const handleMouseEnter = () => {
        setDisplay(true);
    }

    const handleMouseLeave = () => {
        setDisplay(false);
    }

    return (
        <main className="">
        <div className="flex flex-col gap-10 items-left p-20 m-10 bg-white w-[50%] text-black">
            <div className="text-4xl font-bold">
            {name}
            </div>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {status}
            </div>
            <div>
                {display &&
                    <div className="">
                        {updates.map((update) => (
                        <div key={update} className="py-2">
                            <p>{update}</p>
                        </div>
                        ))}
                    </div>
                }  
            </div>
            <div className="flex flex-row gap-6 flex-wrap">
                {tags.map((tag) => (
                    <div key={tag} className="border-2 border-black rounded-lg px-6 py-2 bg-gray-50">
                    <p>{tag}</p>
                    </div>
                ))}
            </div>
            <hr style={{ borderTop: '1px solid #888888' }} />
            <div>
                <div className="text-xl font-bold mb-5">
                    Description
                </div>
                {description}
            </div>
        </div>
        </main>
    )
}
