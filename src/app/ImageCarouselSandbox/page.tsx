"use client";
import React, { useState } from "react";
import ImageCarousel from "../../components/imageCarousel";
import CuteDog1 from "../../../public/images/cute_dog1.jpg";
import CuteDog2 from "../../../public/images/cute_dog2.jpg";
import CuteDog3 from "../../../public/images/cute_dog3.jpg";
import CuteDog4 from "../../../public/images/cute_dog4.jpg";
import CuteDog5 from "../../../public/images/cute_dog5.jpg";

const imageList = [CuteDog1, CuteDog2, CuteDog3, CuteDog4, CuteDog5];

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="image-slider" style={{ position: "relative" }}>
                <ImageCarousel imageList={imageList} />
            </div>
        </main>
    );
}
