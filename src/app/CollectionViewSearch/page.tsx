"use client"
import { useState } from "react";
import SearchBar from "../../components/CollectionViewSearch";

export default function Preview() {

    let [input, setInput] = useState("");

    return (
        <main>
            <SearchBar inputText={input} setInput={setInput} />
            <p> {input} </p>
        </main>
    );
}
