"use client";
import React, { useState } from "react";
import ResizeableIMG from "@/components/resizeableIMG";
import ImageNotFound from "@/../public/images/imageNotFound.jpg";

export default function ImageCarousel(props: { imageList: string[] }) {
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

    return (
        <div className="slider-container flex flex-row items-center">
            <button
                className="cursor-pointer text-white translate-x-16"
                onClick={prevImage}
                style={{ translate: "-10 0" }}
            >
                {
                    <svg
                        className="h-12 w-12 text-black-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            fill="white"
                            stroke="none"
                        />{" "}
                        <line x1="8" y1="12" x2="16" y2="12" stroke="Orange" />{" "}
                        <line x1="8" y1="12" x2="12" y2="16" stroke="Orange" />{" "}
                        <line x1="8" y1="12" x2="12" y2="8" stroke="Orange" />
                    </svg>
                }
            </button>
            <ResizeableIMG
                width={600}
                height={400}
                src={
                    props.imageList.length > 0
                        ? props.imageList[currentImageIndex]
                        : ImageNotFound
                }
                alt="pics of cookies"
            />
            <button
                className="cursor-pointer top-1/2 text-white right-0 -translate-x-16"
                onClick={nextImage}
            >
                {
                    <svg
                        className="h-12 w-12 text-black-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            fill="white"
                            stroke="none"
                        />{" "}
                        <line x1="16" y1="12" x2="8" y2="12" stroke="Orange" />{" "}
                        <line x1="16" y1="12" x2="12" y2="16" stroke="Orange" />{" "}
                        <line x1="16" y1="12" x2="12" y2="8" stroke="Orange" />
                    </svg>
                }
            </button>
        </div>
    );
}
