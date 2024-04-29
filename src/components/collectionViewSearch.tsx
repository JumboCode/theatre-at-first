"use client";
import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
    inputText: string;
    setInput: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({ inputText, setInput }: SearchBarProps) {
    return (
        <div>
            <input
                className="rounded-full px-3 py-2 text-black"
                type="text"
                value={inputText}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search"
            />
        </div>
    );
}
