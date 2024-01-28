"use client"
import {Dispatch, SetStateAction, useState} from "react";

interface SearchBarProps {
    inputText: string;
    setInput: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({inputText, setInput}: SearchBarProps) {
 
    return (
        <div>
        <input 
            className="text-white"
            type="text"
            value={inputText}
            onChange={(e) => setInput(e.target.value)}
            placeholder = "Search"
        />
        </div>
    );
}