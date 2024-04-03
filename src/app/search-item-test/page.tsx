"use client";
import SelectionComponent from "../../components/collectionViewFilter/selectionComponent";
import DisplayComponent from "../../components/collectionViewFilter/displayComponent";
import Item from "../../components/item";
import ItemWithTags from "@/components/itemWithTags";
import Grid from "../../components/grid";
import UserSummary from "@/components/user-summary";
import { useState, useEffect } from "react";
import { SelectItem } from "@/db/schema";
import CuteDog1 from "../../../public/images/cute_dog4.jpg";
import { StaticImageData } from "next/image";


async function getMyData() {
    console.log("getting data");
    return await fetch("/search-item", {
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
    const [locationTags, setLocationTags] = useState([
        "loc1",
        "loc2",
        "loc3",
        "loc4",
        "loc5",
        "loc6",
    ]);
    const [nonLocationTags, setNonLocationTags] = useState([
        "blue",
        "green",
        "red",
        "orange",
        "purple",
        "yellow",
    ]);
    const [nonLocationTags2, setNonLocationTags2] = useState([
        "wood",
        "plastic",
        "metal",
        "cotton",
    ]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState<SelectItem[]>([]);
    const [filteredResults, setFilteredResults] = useState<SelectItem[]>([]);

    useEffect(() => {
        getMyData().then((data) => {
            setUnfiltered(data);
            setFilteredResults(data);
        });
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
        <main className="min-h-max bg-white p-10 flex flex-col">
            <div className="p-4">
                <h1 className="text-4xl font-bold pb-12 text-black">Inventory Viewing</h1>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fb923c"
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
                    className="bg-gray-100 placeholder-gray-500 pl-12 p-2 outline outline-2px outline-gray-500 rounded-3xl text-black"
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

            <div className="px-4">
                <Grid
                    components={filteredResults.map((result) => (
                            <Item
                                title={result.name}
                                status="status"
                                tags={result.tags}
                                key={result.id}
                            />
                    ))}
                />
            </div>
        </main>
    );
}
