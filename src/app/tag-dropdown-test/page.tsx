import TagDropdown from "@/components/TagDropdown";

export default function testPage() {
    const allTags = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "oneone",
    ];

    return (
        <main>
            <div className="bg-purple-400 flex flex-col justify-center">
                <div className="w-[588px]">
                    <TagDropdown tags={allTags}></TagDropdown>
                </div>
            </div>
        </main>
    );
}