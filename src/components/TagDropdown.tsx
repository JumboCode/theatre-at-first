"use client";
import { useState } from "react";

// You are responsible for creating the component that allows a user to select what
//  tags to apply to a new item. The component will receive a list of possible tags
//  , and must update some data structure with what tags are selected.

//DROPDOWN:
//Compenent recieves a list of tags (which is the prop)

//SELECTION:
//Once you click on a tag, it should be added to the product's description or
//smth

//We either create a tag or pick one that already exsits 

// Need to make GET request to Database to retrieve the tags array 
//When the tags are selected, they should be sent back to the schema to be stored?
// The tags that are selected (q: what is the general list of tags? Hard coding 
//for now)get added to the item's "tags" array 

//Prop is an array of all the tags possible to be added to an item 

//scrolly bar is gone 
interface TagDropdownProps {
    tags: string[]
}

export default function TagDropdown(
    props: TagDropdownProps
) {
    const [display, setDisplay] = useState(false);

    const handleClick = () => {
        if (display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    }
    
    return (
        <div className="flex flex-col p-4 gap-4">
            <div onClick={handleClick} className="inline-block align-middle pl-2 border-2 rounded-lg h-[46px]">
                <p className="inline-block align-middle border">
                    Dropdown bar
                </p>
            </div>
            {
                display && (
                    <div className="border-2 h-[144px] rounded-xl overflow-auto">
                        {props.tags.map((tag) => (
                            <div key={tag} className="pl-2 hover:bg-violet-600 hover:font-bold active:bg-violet-700 py-2">
                                <p>{tag}</p>
                            </div>
                        ))} 
                    </div>
                )
            }
        </div>
    );
}