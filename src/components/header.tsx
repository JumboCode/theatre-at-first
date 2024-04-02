"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import ResizeableIMG from "./resizeableIMG";
import logo from "./taf-logo.png";
import UserSummary from "@/components/user-summary";
import { Home } from "./Icons";
import { Bell } from "./Icons";
import { Search } from "./Icons";
import { User } from "./Icons";

interface HeaderProp {
    id: number;
    // imageLogo: StaticImageData;
    status: string;
    firstname: string;
    lastname: string;
    access: string;
    // image: StaticImageData;
}

export default function Header(props: HeaderProp) {
    return (
        <div className="flex flex-row relative bg-emerald-900 h-107px w-1440px gap-5 justify-between items-center p-5">
            <div>Menu</div>
            <div className="absolute left-0 w-full flex flex-row justify-center items-center p-5 gap-5">
                <ResizeableIMG
                    width={57}
                    height={57}
                    className="
                    rounded-full ...
                    bg-white
                    drop-shadow-lg
                    "
                    src={logo.src}
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
                <UserSummary
                    id={props.id}
                    access={props.access}
                    firstname={props.firstname}
                    lastname={props.lastname}
                    // image={props.image}
                ></UserSummary>
            </div>
        </div>
    );
}
