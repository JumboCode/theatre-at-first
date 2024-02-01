"use client"
import SelectionComponent from "../../components/collectionViewFilter/selectionComponent"
import DisplayComponent from "../../components/collectionViewFilter/displayComponent"
import { useState } from "react";

export default function TestPage() {
    
    const [locationTags, setLocationTags] = useState(["loc1", "loc2", "loc3", "loc4", "loc5", "loc6"]);
    const [nonLocationTags, setNonLocationTags] = useState(["blue", "green", "red", "orange", "purple", "yellow"]);
    const [nonLocationTags2, setNonLocationTags2] = useState(["wood", "plastic", "metal", "cotton"]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
                    <div className="w-[300px]">
                        <SelectionComponent tags={nonLocationTags2} setTags={setNonLocationTags2} selectedTags={selectedTags} setSelectedTags={setSelectedTags} category="material"></SelectionComponent>
                    </div>
                </div>
                <div className="p-4">
                    <DisplayComponent selectedTags={selectedTags} setSelectedTags={setSelectedTags}></DisplayComponent>
                </div>
            </div>
            
        </main>
    );
}
