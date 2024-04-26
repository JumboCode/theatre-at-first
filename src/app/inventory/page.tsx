"use client";
import SelectionComponent from "@/components/collectionViewFilter/selectionComponent";
import DisplayComponent from "@/components/collectionViewFilter/displayComponent";
import Item from "@/components/item";
import Grid from "@/components/grid";
import { useState, useEffect } from "react";
import { SelectItem } from "@/db/schema";

async function getTableData(): Promise<SelectItem[]> {
    console.log("getting items");
    return await fetch("/list-items", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => json.results);
}

async function getTagData(): Promise<string[]> {
    console.log("getting tags");
    return await fetch("/list-tags", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => json.results);
}

const filterData = (arr: SelectItem[], searchText: string): SelectItem[] => {
    const searchWords = searchText.toLowerCase().split(" ");

    const data = arr.filter((result: SelectItem): boolean => {
        const text: string =
            result.name.toLowerCase() +
            " " +
            result.desc.toLowerCase() +
            " " +
            result.tags.reduce((acc, tag) => acc + " " + tag.toLowerCase());
        console.log(text);
        //Find matches one word at a time
        return searchWords.every((word) => text.includes(word));
    });
    return data;
};

export default function Home() {
    const [locationTags, setLocationTags] = useState<string[]>([]);
    const [nonLocationTags, setNonLocationTags] = useState<string[]>([]);
    const [nonLocationTags2, setNonLocationTags2] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState<SelectItem[]>([]);
    const [filteredResults, setFilteredResults] = useState<SelectItem[]>([]);

    useEffect(() => {
        getTableData().then((data) => {
            setUnfiltered(data);
            setFilteredResults(data);
        });
        getTagData().then(setNonLocationTags);
    }, []);

    const updateSearchResults = (input_text: string, tags: string[]) => {
        let search_term = input_text + " " + tags.join(" ");
        console.log(search_term);

        if (input_text.length > 0 || tags.length > 0) {
            setFilteredResults(filterData(unfiltered, search_term));
        } else {
            setFilteredResults(unfiltered);
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        updateSearchResults(input_text, selectedTags);
    };

    useEffect(() => {
        // Call the updateSearchResults function whenever selectedTags changes.
        // Use the current search input along with the updated tags.
        updateSearchResults(searchInput, selectedTags);
    }, [selectedTags, searchInput]);

    return (
        <main className="min-h-max bg-white flex flex-col">
            <div className="px-10 pt-10">
                <div className="p-4">
                    <h1 className="text-4xl font-bold pb-12 text-[#0C2B35]">
                        Inventory Viewing
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#EE7200"
                        className="w-6 h-6 absolute m-2 ml-4"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        onInput={handleSearch}
                        value={searchInput}
                        placeholder="Search for an item"
                        className="bg-gray-100 placeholder-[#B7B7B7] pl-12 p-2 outline outline-[2px] outline-[#496767] rounded-3xl text-[#0C2B35] w-[268px]"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-[300px]">
                            <SelectionComponent
                                tags={locationTags}
                                setTags={setLocationTags}
                                selectedTags={selectedTags}
                                setSelectedTags={setSelectedTags}
                                category="location"
                            ></SelectionComponent>
                        </div>
                        <div className="w-[300px]">
                            <SelectionComponent
                                tags={nonLocationTags}
                                setTags={setNonLocationTags}
                                selectedTags={selectedTags}
                                setSelectedTags={setSelectedTags}
                                category="color"
                            ></SelectionComponent>
                        </div>
                        <div className="w-[300px]">
                            <SelectionComponent
                                tags={nonLocationTags2}
                                setTags={setNonLocationTags2}
                                selectedTags={selectedTags}
                                setSelectedTags={setSelectedTags}
                                category="material"
                            ></SelectionComponent>
                        </div>
                    </div>
                    <div className="p-4 border-zinc-950">
                        <DisplayComponent
                            selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                        ></DisplayComponent>
                    </div>
                </div>
            </div>
            <div className="bg-[#B4CDCA] w-full h-2 mb-10"></div>
            <div className="p-10">
                <div className="px-4">
                    <Grid
                        components={filteredResults.map((result) => (
                            <Item
                                title={result.name}
                                status={result.status || "Unknown"}
                                image={
                                    result.imageUrl ||
                                    "/images/imageNotFound.jpg"
                                }
                                key={result.id}
                                id={result.id}
                            />
                        ))}
                    />
                </div>
            </div>
        </main>
    );
}
