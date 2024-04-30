"use client";
import React from "react";
import logo from "@/../public/taf-logo.png";
import { Home, Bell, Search, User } from "./icons";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-row relative bg-emerald-900 h-107px w-1440px gap-5 justify-between items-center p-5">
            <div>Menu</div>
            <div className="absolute left-0 w-full flex flex-row justify-center items-center p-5 gap-5">
                <Image
                    width={57}
                    height={57}
                    className="
                    rounded-full ...
                    bg-white
                    drop-shadow-lg
                    "
                    src={logo.src}
                    alt=""
                />
                <p className="text-white text-2xl font-medium font-serif">
                    Theatre@First
                </p>
            </div>
            <div className="flex flex-row p-5 gap-5 items-center">
                <Home width={24} height={24} className="text-white" />
                <Bell width={24} height={24} className="text-white" />
                <Search width={24} height={24} className="text-white" />
                <User width={24} height={24} className="text-white" />
                <UserButton />
            </div>
        </div>
    );
}
