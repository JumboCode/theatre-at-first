"use client";
import React, { useState } from "react";
import ResizeableIMG from "./resizeableIMG";
import { StaticImageData } from "next/image";

export default function ImageCarousel(props: { imageList: StaticImageData[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % props.imageList.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) =>
                (prevIndex - 1 + props.imageList.length) %
                props.imageList.length
        );
    };

    const leftButtonStyle = {
        transform: "translate(0, -50%)",
    };
    const rightButtonStyle = {
        transform: "translate(0, -50%)",
    };

    return (
        <div>
            <button
                style={leftButtonStyle}
                className="slider-button absolute text-5xl z-1 cursor-pointer left-0.5 top-1/2 text-white"
                onClick={prevImage}
            >
                《
            </button>
            <ResizeableIMG
                width={600}
                height={400}
                src={props.imageList[currentImageIndex].src}
                alt="pics of cookies"
            />
            <button
                style={rightButtonStyle}
                className="slider-button absolute text-5xl z-1 cursor-pointer right-0.5 top-1/2 text-white"
                onClick={nextImage}
            >
                》
            </button>
        </div>
    );
}
