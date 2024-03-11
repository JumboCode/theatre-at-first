"use client"
import { useState, useEffect } from "react";
import {SelectItem} from "@/db/schema";

async function getMyData() {
    console.log("getting data")
    return await fetch("/search-item", {
        method: "GET",
    })
    .then((response) => response.json())
    .then((json) => json.results);
}

function filterData(arr: SelectItem[], searchText: string): SelectItem[] {
    const data = arr.filter((result: SelectItem): boolean => {
        const text: string = result.name.toLowerCase() + " " + result.desc.toLowerCase() + " " 
                                         + result.tags.reduce((acc, tag) => acc + " " + tag.toLowerCase())
        return text.match(searchText.toLowerCase()) != null
    })
    return data
}

export default function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState<SelectItem[]>([]);
    const [filteredResults, setFilteredResults] = useState<SelectItem[]>([]);

    
    useEffect(
        () => { 
            getMyData().then((data) => {
                setUnfiltered(data);
                setFilteredResults(data);
            })
        },
        []
    )

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        if (input_text.length > 0) {
            setFilteredResults(filterData(unfiltered, input_text))
        } else {
            setFilteredResults(unfiltered)
        }
    };

    return (
        <div>
            <div className="p-4">
                <input
                    onInput={handleSearch}
                    value={searchInput}
                    placeholder="Search"
                    className="text-black mb-4"
                >
                </input>
            </div>
            <div>{
                filteredResults.map((result) => (
                    <div key={result.id} className="pb-3">
                        <p className="font-bold">{result.name}</p>
                        <p>{result.desc}</p>
                        <p className="font-style: italic">Tags: {result.tags}</p>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </div>
                ))
            }
            </div>
        </div>
    );
}
