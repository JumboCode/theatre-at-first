"use client";
import { useState, KeyboardEvent, KeyboardEventHandler } from "react";

//DROPDOWN:
//Compenent recieves a list of tags (which is the prop)

//SELECTION:
//Once you click on a tag, it should be added to the product's description or
//smth

//Needs to be added:
//1. When user is deleting word, filtered list goes back to normal
//2. Input text field goes over "Add tag" if the tag is really really long

interface TagDropdownProps {
    tags: string[];
}

export default function TagDropdown(props: TagDropdownProps) {
    const [display, setDisplay] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredTags, setFilteredTags] = useState(props.tags);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        if (input_text.length > 0) {
            setFilteredTags(
                props.tags.filter((tag) => {
                    return tag.match(input_text);
                })
            );
        } else {
            setFilteredTags(props.tags);
        }
    };

    // Handles actions when 'Enter' key is pressed
    const handleEnter = (key_event: React.KeyboardEvent) => {
        if (key_event.key == "Enter") {
            addTag(searchInput);
        }
    }

    const handleAdd = () => {
        addTag(searchInput);
    }

    // Controls display of dropdown
    const handleClick = () => {
        if (!display) {
            setDisplay(true);
        }
    };

    // Controls tag selection
    function handleSelectedTags(tag: string) {
        // if tag is already selected, deselect it and remove from selectedTags
        if (selectedTags.includes(tag)) {
            const toRemove = selectedTags.indexOf(tag);
            setSelectedTags(() => [
                ...selectedTags.slice(0, toRemove),
                ...selectedTags.slice(toRemove + 1),
            ]);
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    function deselectTag(tag: string) {
        const toRemove = selectedTags.indexOf(tag);
        setSelectedTags(() => [
            ...selectedTags.slice(0, toRemove),
            ...selectedTags.slice(toRemove + 1),
        ]);
    }

    function addTag(tag: string) {
        // If tag is in props.tags, add tag to selectedTags array
        // Else (new tag), add tag to props.tags (large tag array), probably requires request to db, then add tag to selectedTags
        // ?? QUESTION: do we actually want a New tag to be added every time someone hits enter
        if (!props.tags.includes(tag)) {
            props.tags.push(tag);
            // console.log("pushed tag");
            // console.log(props.tags);
        } 
        setSelectedTags([...selectedTags, tag]);
        // clear search bar
        setSearchInput("");
    }

    return (
        <div className="flex flex-col p-4 gap-[10px]">
            <div className="relative">
                {searchInput != "" && (
                    <button 
                        onClick={handleAdd}
                        className="text-blue-600 absolute right-0 py-3 px-4"
                    >
                        Add tag
                    </button>)}
                <input
                    onClick={handleClick}
                    onInput={handleSearch}
                    onKeyUp={handleEnter}
                    value={searchInput}
                    placeholder="tag name"
                    className="flex flex-col justify-center pl-2 border-2 rounded-lg h-[46px] w-[100%] text-black"
                />
            </div>
            {display && (
                <div className="border-2 h-[144px] rounded-xl overflow-auto">
                    {(!searchInput ? props.tags : filteredTags).map((tag) => (
                        <div
                            key={tag}
                            onClick={() => handleSelectedTags(tag)}
                            className={`pl-2 py-2 hover:font-bold hover:bg-violet-600 active:bg-violet-600 ${selectedTags.includes(tag) && 'bg-violet-600 font-bold'}`}
                        >
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* if display==true AND at least one tag is selected, show the div*/}
            {display && selectedTags.length > 0 && (
                <div className="flex flex-row gap-2 justify-start">
                    {selectedTags.map((selectedTag) => (
                        <div
                            key={selectedTag}
                            className="border-2 rounded-lg p-2 w-auto flex flex-row gap-2 items-center"
                        >
                            <p>{selectedTag}</p>
                            <svg
                                onClick={() => deselectTag(selectedTag)}
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 1.66675C6.16751 1.66675 2.25 5.39771 2.25 10.0001C2.25 14.6025 6.16751 18.3334 11 18.3334C15.8325 18.3334 19.75 14.6025 19.75 10.0001C19.75 5.39771 15.8325 1.66675 11 1.66675ZM11 16.6667C7.13401 16.6667 4 13.682 4 10.0001C4 6.31818 7.13401 3.33341 11 3.33341C14.866 3.33341 18 6.31818 18 10.0001C18 13.682 14.866 16.6667 11 16.6667ZM12.1355 7.73687C12.4786 7.41277 13.0326 7.41493 13.3729 7.7417L13.378 7.74653C13.7183 8.0733 13.716 8.60093 13.3729 8.92503L12.2354 10L13.3729 11.075L13.378 11.0799C13.7183 11.4066 13.716 11.9343 13.3729 12.2584L13.3678 12.2632C13.0247 12.5873 12.4707 12.5851 12.1304 12.2584L11.0017 11.175L9.8729 12.2584L9.86783 12.2632C9.52473 12.5873 8.97071 12.5851 8.63041 12.2584L8.62533 12.2535C8.28503 11.9268 8.2873 11.3991 8.63041 11.075L9.76791 10L8.63041 8.92503C8.2873 8.59826 8.2873 8.06847 8.63041 7.7417C8.97351 7.41493 9.5298 7.41493 9.87291 7.7417L11.0017 8.82503L12.1304 7.7417L12.1355 7.73687Z"
                                    fill="#8E8E8E"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
