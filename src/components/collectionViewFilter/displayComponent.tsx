import { Dispatch, SetStateAction } from "react";

interface DisplayProps {
    selectedTags: string[];
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
    selectedCategories: string[];
    setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}

export default function DisplayComponent(props: DisplayProps) {
    function deselectTag(tag: string) {
        const toRemove = props.selectedTags.indexOf(tag);
        props.setSelectedTags(() => [
            ...props.selectedTags.slice(0, toRemove),
            ...props.selectedTags.slice(toRemove + 1),
        ]);
    }

    function deselectCategory(tag: string) {
        const toRemove = props.selectedCategories.indexOf(tag);
        props.setSelectedCategories(() => [
            ...props.selectedCategories.slice(0, toRemove),
            ...props.selectedCategories.slice(toRemove + 1),
        ]);
    }

    return (
        <div>
            {props.selectedCategories.length > 0 && (
                <div className="pb-3 flex flex-row gap-2 justify-start flex-wrap">
                    {props.selectedCategories.map((selectedTag) => (
                        <div
                            key={selectedTag}
                            className="border-[#496767] border-[2px] bg-[#FAFAFA] rounded-lg p-2 w-auto flex flex-row gap-2 items-center text-[#404040]"
                        >
                            <p>{selectedTag}</p>
                            <svg
                                onClick={() => deselectCategory(selectedTag)}
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="#EE7200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 1.66675C6.16751 1.66675 2.25 5.39771 2.25 10.0001C2.25 14.6025 6.16751 18.3334 11 18.3334C15.8325 18.3334 19.75 14.6025 19.75 10.0001C19.75 5.39771 15.8325 1.66675 11 1.66675ZM11 16.6667C7.13401 16.6667 4 13.682 4 10.0001C4 6.31818 7.13401 3.33341 11 3.33341C14.866 3.33341 18 6.31818 18 10.0001C18 13.682 14.866 16.6667 11 16.6667ZM12.1355 7.73687C12.4786 7.41277 13.0326 7.41493 13.3729 7.7417L13.378 7.74653C13.7183 8.0733 13.716 8.60093 13.3729 8.92503L12.2354 10L13.3729 11.075L13.378 11.0799C13.7183 11.4066 13.716 11.9343 13.3729 12.2584L13.3678 12.2632C13.0247 12.5873 12.4707 12.5851 12.1304 12.2584L11.0017 11.175L9.8729 12.2584L9.86783 12.2632C9.52473 12.5873 8.97071 12.5851 8.63041 12.2584L8.62533 12.2535C8.28503 11.9268 8.2873 11.3991 8.63041 11.075L9.76791 10L8.63041 8.92503C8.2873 8.59826 8.2873 8.06847 8.63041 7.7417C8.97351 7.41493 9.5298 7.41493 9.87291 7.7417L11.0017 8.82503L12.1304 7.7417L12.1355 7.73687Z"
                                    fill="#EE7200"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            )}
            {props.selectedTags.length > 0 && (
                <div className="flex flex-row gap-2 justify-start flex-wrap">
                    {props.selectedTags.map((selectedTag) => (
                        <div
                            key={selectedTag}
                            className="border-[#496767] border-[2px] bg-[#FAFAFA] rounded-lg p-2 w-auto flex flex-row gap-2 items-center text-[#404040]"
                        >
                            <p>{selectedTag}</p>
                            <svg
                                onClick={() => deselectTag(selectedTag)}
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="#EE7200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 1.66675C6.16751 1.66675 2.25 5.39771 2.25 10.0001C2.25 14.6025 6.16751 18.3334 11 18.3334C15.8325 18.3334 19.75 14.6025 19.75 10.0001C19.75 5.39771 15.8325 1.66675 11 1.66675ZM11 16.6667C7.13401 16.6667 4 13.682 4 10.0001C4 6.31818 7.13401 3.33341 11 3.33341C14.866 3.33341 18 6.31818 18 10.0001C18 13.682 14.866 16.6667 11 16.6667ZM12.1355 7.73687C12.4786 7.41277 13.0326 7.41493 13.3729 7.7417L13.378 7.74653C13.7183 8.0733 13.716 8.60093 13.3729 8.92503L12.2354 10L13.3729 11.075L13.378 11.0799C13.7183 11.4066 13.716 11.9343 13.3729 12.2584L13.3678 12.2632C13.0247 12.5873 12.4707 12.5851 12.1304 12.2584L11.0017 11.175L9.8729 12.2584L9.86783 12.2632C9.52473 12.5873 8.97071 12.5851 8.63041 12.2584L8.62533 12.2535C8.28503 11.9268 8.2873 11.3991 8.63041 11.075L9.76791 10L8.63041 8.92503C8.2873 8.59826 8.2873 8.06847 8.63041 7.7417C8.97351 7.41493 9.5298 7.41493 9.87291 7.7417L11.0017 8.82503L12.1304 7.7417L12.1355 7.73687Z"
                                    fill="#EE7200"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
