import TagDropdown from "@/components/TagDropdown";

export default function testPage() {

    const allTags = ["one", "two", "three", "four", "five"];
    
    return (
        <main>
            <div className="bg-purple-400 flex flex-col justify-center border-2 border-blue-500">
                <div className="w-[800px] border-2 border-black">
                    <TagDropdown tags={allTags}></TagDropdown>
                </div>
            </div> 
        </main>
    ); 
}