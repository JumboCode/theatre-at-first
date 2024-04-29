"use client";
import ResizeableIMG from "./resizeableIMG";
import { StaticImageData } from "next/image";

interface UserProps {
    id: number;
    firstname: string;
    lastname: string;
    access: string;
    image: StaticImageData;
}

export default function UserSummary(props: UserProps) {
    return (
        <div className="flex flex-row items-center gap-4 p-5 text-black">
            <ResizeableIMG
                width={50}
                height={50}
                className="
                rounded-full ...
                border-2
                w-1/2
                my-4
                md: w-4/12
                border-amber-600
                drop-shadow-lg
                ring-1
                ring-amber-500	
                backdrop-blur-lg
                outline-[8px]
                "
                alt=""
                src={props.image.src}
            />
            <div>
                <p className="text-3xl font-bold max-w-3 line-clamp-1 truncate text-overflow: ellipsis;">
                    {props.firstname} {props.lastname}
                </p>
                <p className="text-2xl text-gray-400 max-w-3 line-clamp-1 text-overflow: ellipsis;">
                    {props.access}
                </p>
            </div>
        </div>
    );
}
