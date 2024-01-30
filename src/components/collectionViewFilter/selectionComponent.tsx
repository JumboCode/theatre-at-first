import { Dispatch, SetStateAction, useState } from "react"

interface SelectionProps {
    tags: string[],
    setTags: Dispatch<SetStateAction<string[]>>,
    selectedTags: string[],
    setSelectedTags: Dispatch<SetStateAction<string[]>>,
    category: string
}

export default function SelectionComponent(props: SelectionProps) {
    console.log(props.selectedTags);
    console.log(props.selectedTags.length);
    const [display, setDisplay] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredTags, setFilteredTags] = useState(props.tags);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        if (input_text.length > 0) {
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
            console.log("HERE");
            props.setSelectedTags([...props.selectedTags, tag]);
        }
    }

    return (
        <div className="flex flex-col p-4 gap-[10px]">
            <div className="flex flex-row gap-1 align-middle bg-white rounded-lg">
                <input
                    onInput={handleSearch}
                    onKeyUp={handleEnter}
                    value={searchInput}
                    placeholder={"Filter by " + props.category}
                    className="flex flex-col justify-center pl-2 border-2 rounded-lg h-[46px] w-[100%] text-black"
                />
                <p onClick={handleClick} className="text-black bg-white rounded-lg p-2">v</p>
            </div>
            {display && (
                <div
                    className="border-2 h-[144px] rounded-xl overflow-auto"
                    onMouseLeave={handleMouseLeave}
                >
                    {(!searchInput ? props.tags : filteredTags).map((tag) => (
                        <div
                            key={tag}
                            onClick={() => handleSelectedTags(tag)}
                            className={`pl-2 py-2 hover:font-bold hover:bg-violet-600 active:bg-violet-600 ${
                                props.selectedTags.includes(tag) &&
                                "bg-violet-600 font-bold"
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