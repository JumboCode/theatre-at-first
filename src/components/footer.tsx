"use client";

import React from "react";
import { Facebook } from "./Icons";
import { Mail } from "./Icons";
import { Instagram } from "./Icons";
import { YouTube } from "./Icons";
import { Twitter } from "./Icons";
import { Phone } from "./Icons";

export default function Footer() {
    return (
        <div className="flex items-center flex-col py-10 bg-emerald-900 h-107px w-1440px gap-16 text-stone-50 font-sans">
            <p>Copyright ©2023. Theatre@First Inc.</p>
            <div className="absolute left-0 w-full flex flex-row justify-center items-center py-10 p-10 gap-5">
                <Facebook className="rounded-full ring-1 border-2 w-6 h-6" />
                <Mail className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
                <YouTube className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Phone className="rounded-full ring-1 border-2 w-6 h-6" />
            </div>
            <p className="text-center">
                Theatre@First is part of the Massachusetts Community Theatre
                Corporation, a non-profit arts organization recognized by the
                Commonwealth of Massachusetts and by the Internal Revenue
                Service under Section 501(c)3.{" "}
            </p>
        </div>
    );
}
