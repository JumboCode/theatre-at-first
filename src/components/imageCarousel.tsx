"use client";
import React, { useState } from "react";
import ResizeableIMG from "./resizeableIMG";
import { StaticImageData } from "next/image";

export default function ImageCarousel(props: { imageList: StaticImageData[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.imageList.length);
    };
    
    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + props.imageList.length) % props.imageList.length
        );
    };

    const leftButtonStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        left: "2px",
    };
    const rightButtonStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        right: "2px",
    };
    
    return (
        <div>
            <button
          style={leftButtonStyle}
          className="slider-button"
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
          className="slider-button"
          onClick={nextImage}
        >
          》
        </button>
        </div>
    )
}