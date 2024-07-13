"use client";
import {
    Dispatch,
    SetStateAction,
    useState,
    KeyboardEvent,
    KeyboardEventHandler,
} from "react";

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
    selectedTags: string[];
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
}

export default function TagDropdown(props: TagDropdownProps) {
    const [display, setDisplay] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredTags, setFilteredTags] = useState(props.tags.sort());

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
            setFilteredTags(props.tags.sort());
        }
    };

    // Handles actions when 'Enter' key is pressed
    const handleEnter = (key_event: React.KeyboardEvent) => {
        if (key_event.key == "Enter") {
            addTag(searchInput);
        }
    };

    const handleAdd = () => {
        addTag(searchInput);
    };

    // Controls display of dropdown
    const handleClick = () => {
        if (!display) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    };

    const handleMouseLeave = () => {
        setDisplay(false);
    };

    // Controls tag selection
    function handleSelectedTags(tag: string) {
        // if tag is already selected, deselect it and remove from selectedTags
        if (props.selectedTags.includes(tag)) {
            const toRemove = props.selectedTags.indexOf(tag);
            props.setSelectedTags(() => [
                ...props.selectedTags.slice(0, toRemove),
                ...props.selectedTags.slice(toRemove + 1),
            ]);
        } else {
            props.setSelectedTags([...props.selectedTags, tag].sort());
        }
    }

    function deselectTag(tag: string) {
        const toRemove = props.selectedTags.indexOf(tag);
        props.setSelectedTags(() => [
            ...props.selectedTags.slice(0, toRemove),
            ...props.selectedTags.slice(toRemove + 1),
        ]);
    }

    function addTag(tag: string) {
        // If tag is in props.tags, add tag to selectedTags array
        // Else (new tag), add tag to props.tags (large tag array), probably requires request to db, then add tag to selectedTags
        if (!props.tags.includes(tag)) {
            props.tags.push(tag);
            props.tags.sort();
        }

        if (!props.selectedTags.includes(tag)) {
            props.setSelectedTags([...props.selectedTags, tag].sort());
        }

        // clear search bar
        setSearchInput("");
    }

    return (
        <div className="flex flex-col p-4 gap-[10px]">
            <div className="flex flex-col gap-1 align-middle text-xs font-light">
                <div className="mt-2 text-amber-700 font-bold mb-2 text-sm">
                    Tags
                </div>
                <input
                    onClick={handleClick}
                    onInput={handleSearch}
                    onKeyUp={handleEnter}
                    value={searchInput}
                    placeholder="Category Name"
                    className="relative flex flex-col justify-center pl-3 border border-amber-500 rounded-lg h-[46px] w-[100%] text-black focus:outline-none focus:border-amber-400 focus:placeholder-gray-800"
                    style={{
                        backgroundImage:
                            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" width="24" height="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 10l4 4 4-4H8z"/></svg>\')',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 8px center",
                    }}
                />
                {searchInput != "" && (
                    <button
                        onClick={handleAdd}
                        className="text-teal-800 font-bold bg-gray-200 rounded-lg py-2 px-3 min-w-min whitespace-nowrap hover:bg-gray-300 hover:text-teal-900"
                    >
                        Add tag
                    </button>
                )}
            </div>
            {display && (
                <div>
                    <div
                        className="border h-[144px] rounded-xl overflow-auto text-black border-solid border-amber-400 scrollbar-webkit"
                        onMouseLeave={handleMouseLeave}
                    >
                        {(!searchInput ? props.tags : filteredTags).map(
                            (tag) => (
                                <div
                                    key={tag}
                                    onClick={() => handleSelectedTags(tag)}
                                    className={`py-2 bg-white hover:bg-selected_tag text-xs pl-3 ${
                                        props.selectedTags.includes(tag) &&
                                        "bg-selected_tag font-bold"
                                    }`}
                                >
                                    <p>{tag}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
            {/* if at least one tag is selected, show the div*/}
            {props.selectedTags.length > 0 && (
                <div className="flex flex-row gap-2 justify-start flex-wrap">
                    {props.selectedTags.map((selectedTag) => (
                        <div
                            key={selectedTag}
                            className="pl-2 pr-2 py-1 border-2 border-teal-800 bg-white rounded-lg w-auto flex flex-row gap-2 items-center text-black overflow-scroll"
                        >
                            <span className="overflow-scroll">
                                <p className="">{selectedTag}</p>
                            </span>
                            <svg
                                onClick={() => deselectTag(selectedTag)}
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="min-w-[22px] min-h-[22px]"
                            >
                                <path
                                    d="M11 1.66675C6.16751 1.66675 2.25 5.39771 2.25 10.0001C2.25 14.6025 6.16751 18.3334 11 18.3334C15.8325 18.3334 19.75 14.6025 19.75 10.0001C19.75 5.39771 15.8325 1.66675 11 1.66675ZM11 16.6667C7.13401 16.6667 4 13.682 4 10.0001C4 6.31818 7.13401 3.33341 11 3.33341C14.866 3.33341 18 6.31818 18 10.0001C18 13.682 14.866 16.6667 11 16.6667ZM12.1355 7.73687C12.4786 7.41277 13.0326 7.41493 13.3729 7.7417L13.378 7.74653C13.7183 8.0733 13.716 8.60093 13.3729 8.92503L12.2354 10L13.3729 11.075L13.378 11.0799C13.7183 11.4066 13.716 11.9343 13.3729 12.2584L13.3678 12.2632C13.0247 12.5873 12.4707 12.5851 12.1304 12.2584L11.0017 11.175L9.8729 12.2584L9.86783 12.2632C9.52473 12.5873 8.97071 12.5851 8.63041 12.2584L8.62533 12.2535C8.28503 11.9268 8.2873 11.3991 8.63041 11.075L9.76791 10L8.63041 8.92503C8.2873 8.59826 8.2873 8.06847 8.63041 7.7417C8.97351 7.41493 9.5298 7.41493 9.87291 7.7417L11.0017 8.82503L12.1304 7.7417L12.1355 7.73687Z"
                                    fill="#FFA000"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
