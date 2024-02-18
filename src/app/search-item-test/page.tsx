"use client"
import { useState } from "react";

const getData = async () => {
    const response = await fetch("/search-item", {
        method: "GET",
    });
    return response.json();
}

export default function Home() {

    const [searchInput, setSearchInput] = useState("");

    const data = getData();
    console.log();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        if (input_text.length > 0) {
            
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
    );
}
