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

// Need to make GET request to Database to retrieve the tags array 
//When the tags are selected, they should be sent back to the schema to be stored?
// The tags that are selected (q: what is the general list of tags? Hard coding 
//for now)get added to the item's "tags" array 

//Prop is an array of all the tags possible to be added to an item 
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
            <div onClick={handleClick} className="border-2 h-12">
                Dropdown bar
            </div>
            {
                display && (
                    <div className="border-2 h-24">
                    Container of tags list 
                    </div>
                )
            }
        </div>
    );
}