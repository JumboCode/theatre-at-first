"use client";

import React from "react";
import { Facebook } from "./icons";
import { Mail } from "./icons";
import { Instagram } from "./icons";
import { YouTube } from "./icons";
import { Twitter } from "./icons";
import { Phone } from "./icons";

export default function Footer() {
    return (
        <div className="flex items-center flex-col py-2 bg-emerald-900 gap-2 text-stone-50 font-sans">
            <p>Copyright ©2023. Theatre@First Inc.</p>
            <p className="text-center">
                Theatre@First is part of the Massachusetts Community Theatre
                Corporation, a non-profit arts organization recognized by the
                Commonwealth of Massachusetts and by the Internal Revenue
                Service under Section 501(c)3.{" "}
            </p>
        </div>
    );
}
