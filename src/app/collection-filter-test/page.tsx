"use client"
import SelectionComponent from "../../components/collectionViewFilter/selectionComponent"
import DisplayComponent from "../../components/collectionViewFilter/displayComponent"
import { useState } from "react";

// TODO 
// - when searchinput doesn't match any of the tags, setDisplay(false)
// - add a dropdown arrow and hook it up to setDisplay

export default function TestPage() {
    
    const [locationTags, setLocationTags] = useState(["loc1", "loc2", "loc3", "loc4", "loc5", "loc6"]);
    const [nonLocationTags, setNonLocationTags] = useState(["blue", "green", "red", "orange", "purple", "yellow"]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    console.log("page: " + selectedTags.length)

    return (
        <main>
            <div className="flex flex-col bg-purple-400">
                <div className="flex flex-row">
                    <div className="w-[300px]">
                        <SelectionComponent tags={locationTags} setTags={setLocationTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} category="location"></SelectionComponent>
                    </div>
                    <div className="w-[300px]">
                        <SelectionComponent tags={nonLocationTags} setTags={setNonLocationTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} category="color"></SelectionComponent>
                    </div>
                </div>
                <div className="p-4">
                    <DisplayComponent selectedTags={selectedTags} setSelectedTags={setSelectedTags}></DisplayComponent>
                </div>
            </div>
            
        </main>
    );
}
