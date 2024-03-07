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
        // <div>
        //     <button
        //         style={leftButtonStyle}
        //         className="slider-button absolute text-5xl z-1 cursor-pointer left-0.5 top-1/2 text-white"
        //         onClick={prevImage}
        //     >
        //         <svg className="h-12 w-12 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="8" y1="12" x2="16" y2="12" />  <line x1="8" y1="12" x2="12" y2="16" />  <line x1="8" y1="12" x2="12" y2="8" /></svg>
        //     </button>
        //     <ResizeableIMG
        //         width={600}
        //         height={400}
        //         src={props.imageList[currentImageIndex].src}
        //         alt="pics of cookies"
        //     />
        //     <button
        //         style={rightButtonStyle}
        //         className="slider-button absolute text-5xl z-1 cursor-pointer right-0.5 top-1/2 text-white"
        //         onClick={nextImage}
        //     >
        //         <svg className="h-12 w-12 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
        //     </button>
        // </div>
    <div className="slider-container">
        <button
            className="absolute cursor-pointer text-white"
            onClick={prevImage}
            style={{top: '30%', transform: 'translateY(-40%)' }}
        >
            {<svg className="h-12 w-12 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="8" y1="12" x2="16" y2="12" />  <line x1="8" y1="12" x2="12" y2="16" />  <line x1="8" y1="12" x2="12" y2="8" /></svg>}
        </button>
        <ResizeableIMG
            width={600}
            height={400}
            src={props.imageList[currentImageIndex].src}
            alt="pics of cookies"
        />
        <button
            className="absolute cursor-pointer top-1/2 text-white"
            onClick={nextImage}
            style={{top: '28%', transform: 'translateX(1130%)'}}
        >
            {<svg className="h-12 w-12 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>}
        </button>
    </div>
    );
}
