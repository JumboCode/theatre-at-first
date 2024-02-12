"use client"
import { useState } from "react";
import Image from "next/image";
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
        <div className="flex flex-row items-center gap-10 p-5 bg-white w-[35%] text-black">
            <ResizeableIMG
                width={125}
                height={125}
                className="
                rounded-full ...
                border-4
                w-1/2
                my-4
                md: w-4/12
                border-white
                drop-shadow-lg
                ring-1
                ring-gray-400	
                backdrop-blur-lg
                outline-[8px]
                "
                src={props.image.src}
            />
            <div>
                <p className="text-3xl font-bold max-w-3 line-clamp-1 truncate text-overflow: ellipsis;">{props.firstname} {props.lastname}</p>
                <p className="text-2xl text-gray-400 max-w-3 line-clamp-1 text-overflow: ellipsis;">{props.access}</p>
            </div>
        </div>
    );
}
