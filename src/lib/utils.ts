import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Orders tags alphabetically regardless of capitalization ("abc" before "XYZ").
export function compareTags(a: string, b: string) {
    return a.localeCompare(b, undefined, { sensitivity: "base" }) || a.localeCompare(b);
}

// Returns a sorted copy, leaving the original array untouched.
export function sortTags(tags: string[]) {
    return [...tags].sort(compareTags);
}

// If the tag already exists with different capitalization, returns the existing
// spelling (typing "book" when "Book" exists gives "Book"). Otherwise returns
// the tag as typed, with surrounding whitespace removed.
export function matchExistingTag(tag: string, existingTags: string[]) {
    const trimmed = tag.trim();
    // An exact match wins, in case both "book" and "Book" already exist
    if (existingTags.includes(trimmed)) {
        return trimmed;
    }
    const match = existingTags.find(
        (t) => t.trim().toLowerCase() === trimmed.toLowerCase()
    );
    return match ?? trimmed;
}
