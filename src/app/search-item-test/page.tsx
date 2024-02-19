"use client"
import { useState } from "react";

const getMyData = async (setResults: (value: []) => void) => {
    return await fetch("/search-item", {
        method: "GET",
    })
    // ????????????
    .then((response) => response.json())
    .then((json) => json.results)
    .then((data) => setResults(data));
}

export default function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const filterData(arr: string[]) {
    
        arr.filter((result) => {return result.match(searchInput)})
    
    }
    
    getMyData(setUnfiltered).then(() => filterData(unfiltered));

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        if (input_text.length > 0) {
            // setFilteredResults
            // data.filter((result) => {
            //     return result.match(input_text);
            // })
        } else {

        }
    };

    return (
        <input
            onInput={handleSearch}
            value={searchInput}
            placeholder="Search"
            className="text-black"
        >
        </input>
        // Map over filteredResults
    );
}
