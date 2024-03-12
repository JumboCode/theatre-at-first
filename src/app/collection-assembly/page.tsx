"use client";
import SelectionComponent from "../../components/collectionViewFilter/selectionComponent";
import DisplayComponent from "../../components/collectionViewFilter/displayComponent";
import Item from "../../components/item";
import Grid from "../../components/grid";
import { useState } from "react";
import { SelectItem } from "@/db/schema";

const getMyData = async (setResults: (value: SelectItem[]) => void) => {
    console.log("getting data");
    return await fetch("/search-item", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => json.results)
        .then((data) => setResults(data));
};

const filterData = (arr: SelectItem[], searchText: string): SelectItem[] => {
    const data = arr.filter((result: SelectItem): boolean => {
        const text: string =
            result.name.toLowerCase() +
            " " +
            result.desc.toLowerCase() +
            " " +
            result.tags.reduce((acc, tag) => acc + " " + tag.toLowerCase());
        return text.match(searchText.toLowerCase()) != null;
    });
    return data;
};

export default function TestPage() {
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

    const componentsArray = [
        <Item
            title="Red T-Shirt"
            status="available"
            image="image1.png"
            tags="blue, red"
        />,
        <Item
            title="Yellow Hat"
            status="not available"
            image="image2.png"
            tags="yellow, loc6, orange"
        />,
        <Item
            title="Red Sword Prop"
            status="available"
            image="image1.png"
            tags="wood, plastic, red"
        />,
        <Item
            title="Purple Pants"
            status="available"
            image="image2.png"
            tags="purple"
        />,
        <Item
            title="Black T-Shirt"
            status="not available"
            image="image1.png"
            tags="loc2, loc1"
        />,
        <Item
            title="Green Jacket"
            status="available"
            image="image2.png"
            tags="green, cotton"
        />,
        <Item
            title="Plastic Chair"
            status="not available"
            image="image2.png"
            tags="plastic, loc5"
        />,
        <Item
            title="Wooden Stool"
            status="not available"
            image="image2.png"
            tags="loc1, wood"
        />,
        // Add more components as needed
    ];

    return (
        <main className="h-screen">
            <div className="flex flex-col bg-purple-400">
                <div className="flex flex-row">
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
                <div className="p-4">
                    <DisplayComponent
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    ></DisplayComponent>
                </div>
            </div>
            <Grid components={filterByTag(componentsArray, selectedTags)} />
        </main>
    );
}
