"use client";

interface Prop {
    title: string;
    image: string;
    tags: string[];
}

export default function ItemWithTags(props: Prop) {
    return (
        <div className="h-80 w-60 rounded-xl shadow-md">
            <div className="h-full flex flex-col">
                <div className="h-4/5 bg-slate-500 rounded-t-xl"></div>
                <div className="p-3">
                    <p className="text-gray-950 font-bold text-base">
                        {props.title}
                    </p>
                    {props.tags.map((tag) => (
                        <div key={tag} className="border-black border-1">
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
