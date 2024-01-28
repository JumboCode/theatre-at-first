import Image from "next/image";
import ResizeableIMG from "./resizeableIMG";

"use client"
import { useState } from "react";

interface UserProps {
    id: number;
    firstname: string;
    lastname: string;
    access: string;
    image: string;
}

export default function UserSummary(props: UserProps) {

    return (
        // <div>
            <div className="flex flex-col gap-10 items-left p-20 m-10 bg-white w-[50%] text-black">
            <div className="text-4xl font-bold">{props.firstname} 
            <div className="text-4xl font-bold">{props.lastname}
        </div></div></div>
    );
}
