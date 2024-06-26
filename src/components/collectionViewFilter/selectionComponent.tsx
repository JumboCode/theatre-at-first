import { Dispatch, SetStateAction, useState } from "react";

interface SelectionProps {
    tags: string[];
    setTags: Dispatch<SetStateAction<string[]>>;
    selectedTags: string[];
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
    category: string;
}

export default function SelectionComponent(props: SelectionProps) {
    const [display, setDisplay] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredTags, setFilteredTags] = useState(props.tags);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);

        const arr: string[] = props.tags.filter((tag) => {
            return tag.match(input_text);
        });

        if (arr.length == 0) {
            setDisplay(false);
        } else if (input_text.length > 0) {
            setDisplay(true);
            setFilteredTags(
                props.tags.filter((tag) => {
                    return tag.match(input_text);
                })
            );
        }
    };

    // Handles actions when 'Enter' key is pressed
    const handleEnter = (key_event: React.KeyboardEvent) => {
        if (key_event.key == "Enter") {
            // TODO
        }
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
            props.setSelectedTags([...props.selectedTags, tag]);
        }
    }

    return (
        <div className="flex flex-col p-4 gap-[10px] bg-white">
            <div className="flex flex-row gap-1 align-middle bg-orange-100 rounded-lg">
                <input
                    onInput={handleSearch}
                    onKeyUp={handleEnter}
                    value={searchInput}
                    placeholder={
                        props.category.charAt(0).toUpperCase() +
                        props.category.slice(1)
                    }
                    className="flex flex-col justify-center pl-4 h-[46px] w-[100%] text-[#4B4B4B] placeholder-[#4B4B4B] focus:outline-none bg-[#FFEED8] rounded-xl"
                />
                {display ? (
                    <p
                        onClick={handleClick}
                        className="text-[#4B4B4B] bg-[#FFEED8] rounded-xl p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#4B4B4B"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </p>
                ) : (
                    <p
                        onClick={handleClick}
                        className="text-[#4B4B4B] bg-[#FFEED8] rounded-xl p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#4B4B4B"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </p>
                )}
            </div>
            {display && (
                <div
                    className="rounded-xl border-[1px] border-[#839996] h-44 overflow-auto"
                    onMouseLeave={handleMouseLeave}
                >
                    {(!searchInput ? props.tags : filteredTags).map((tag) => (
                        <div
                            key={tag}
                            onClick={() => handleSelectedTags(tag)}
                            className={`pl-2 py-2 hover:font-bold hover:bg-[#d8ede8] active:bg-[#d8ede8] text-[#4B4B4B] ${
                                props.selectedTags.includes(tag) &&
                                "bg-white text-[#4B4B4B] font-bold"
                            }`}
                        >
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
