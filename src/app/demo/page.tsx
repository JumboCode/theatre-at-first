import TagDropdown from "@/components/TagDropdown";
import ImageCapture from "@/components/image-capture-and-upload-component";
import ItemInput from "@/components/itemInputForm";

export default function Demo() {
    return (
        <main className="p-10 gap-5 w-screen h-screen bg-black flex flex-col">
        <div className="flex flex-row justify-between w-full">
            <h1 className="text-3xl font-serif font-black">Theatre @ First</h1>
            <h1 className="text-3xl font-bold">Jumbo<span className="text-[#10bc9e]">Code</span></h1>
        </div>
        <div className="flex flex-row justify-center items-center w-full flex-1 gap-7">
            <div className="p-5 border border-white w-full h-full flex flex-col gap-5">
                <h1 className="text-2xl font-serif">New Item Input</h1>
                <ItemInput />
            </div>

            <div className="p-5 border border-white w-full h-full flex flex-col gap-5">
                <h1 className="text-2xl font-serif">Tag Selection Dropdown</h1>
                <TagDropdown tags={["one", "two", "three", "four", "five", "six", "seven"]}/>
            </div>

            <div className="p-5 border border-white w-full h-full flex flex-col gap-5">
                <h1 className="text-2xl font-serif">Image Capture</h1>
                <ImageCapture />
            </div>
        </div>
        </main>
    );
}
