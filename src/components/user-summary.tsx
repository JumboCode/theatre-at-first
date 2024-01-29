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
        // <div>
            <div className="flex flex-col gap-10 items-left p-20 m-10 bg-white w-[50%] text-black">
            <div className="text-4xl font-bold">{props.firstname} {props.lastname}
            <div className="text-4xl font-bold">{props.access}
            <ResizeableIMG
                width={125}
                height={125}
                // className="rounded-full ... border-black"
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
                bg-center
                outline-[8px]
                "
                src={props.image.src}
                alt="pics of puppies"
            />
        </div></div></div>
    );
}
