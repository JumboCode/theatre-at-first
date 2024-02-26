"use client"
import { useState, useEffect } from "react";
import {SelectItem} from "@/db/schema";

const getMyData = async (setResults: (value: SelectItem[]) => void) => {
    console.log("getting data")
    return await fetch("/search-item", {
        method: "GET",
    })
    .then((response) => response.json())
    .then((json) => json.results)
    .then((data) => setResults(data));
}

const filterData = (arr: SelectItem[], searchText: string): SelectItem[] => {
    const data = arr.filter((result: SelectItem): boolean => {
        const text: string = result.name + " " + result.desc + " " 
                                         + result.tags.reduce((acc, tag) => acc + " " + tag)
        return text.match(searchText) != null
    })
    return data
}

export default function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    
    useEffect(
        () => { 
            getMyData(setUnfiltered).then(() => {
                if (searchInput.length > 0) {
                    setFilteredResults(filterData(unfiltered, input_text))
                } else {
                    setFilteredResults(unfiltered)
                }
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
        <input
            onInput={handleSearch}
            value={searchInput}
            placeholder="Search"
            className="text-black"
        >
        </input>
        </div>
        // Map over filteredResults
    );
}
