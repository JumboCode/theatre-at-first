"use client";
import React from "react";
import logo from "@/../public/taf-logo.png";
import { Home, Plus } from "./icons";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-row relative bg-emerald-900 gap-5 justify-between items-center px-5">
            <div>
                <Image
                    width={57}
                    height={57}
                    className="
                    md:hidden
                    rounded-full ...
                    bg-white
                    drop-shadow-lg
                    "
                    src={logo.src}
                    alt=""
                />
            </div>
            <div className="absolute left-0 w-full flex flex-row justify-center items-center p-5 gap-5">
                <Image
                    width={57}
                    height={57}
                    className="
                    hidden
                    md:flex
                    rounded-full ...
                    bg-white
                    drop-shadow-lg
                    "
                    src={logo.src}
                    alt=""
                />
                <p className="hidden md:flex text-white text-2xl font-medium font-serif">
                    Theatre@First
                </p>
            </div>
            <div className="flex flex-row p-5 items-center z-50">
                <div className="flex flex-row p-5 gap-5 items-center">
                    <a href="/inventory"><Home width={24} height={24} className="text-white" /></a>
                    <a href="/item-upload"><Plus width={24} height={24} className="text-white" /></a>
                </div>
                <UserButton />
            </div>
        </div>
    );
}
