"use client";

interface Prop {
    title: string;
    image: string;
    status: string;
}

export default function Item(props: Prop) {
    return (
        <div className="h-80 w-60 rounded-xl shadow-md">
            <div className="h-full flex flex-col">
                <div className="h-4/5 bg-slate-500 rounded-t-xl"></div>
                <div className="p-3">
                    <p className="text-[#496767] font-bold text-base mb-2">
                        {props.title}
                    </p>
                    {(props.status == "In Stock") ? (
                        <p className="text-sm text-[#11763D] border-[#11763D] border-2 w-fit px-2 rounded-lg">In Stock</p>
                    ) : (
                        <p className="text-sm text-[#DF1642] border-[#DF1642] border-2 w-fit px-2 rounded-lg">Out of Stock</p>
                    )}
                </div>
            </div>
        </div>
    );
}
