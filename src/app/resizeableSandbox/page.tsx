"use client";
import React, { useState } from "react";
import ResizeableIMG from "../../components/resizeableIMG";
import CuteDog1 from "../../../public/images/cute_dog1.jpg";
import CuteDog2 from "../../../public/images/cute_dog2.jpg";
import CuteDog3 from "../../../public/images/cute_dog3.jpg";
import CuteDog4 from "../../../public/images/cute_dog4.jpg";
import CuteDog5 from "../../../public/images/cute_dog5.jpg";

const imageList = [CuteDog1, CuteDog2, CuteDog3, CuteDog4, CuteDog5];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
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
  //   return (
  //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //       {imageList.map((v) => (
  //         <ResizeableIMG
  //           width={600}
  //           height={400}
  //           src={v.src}
  //           alt="pics of cookies"
  //         />
  //       ))}
  //     </main>
  //   );
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="image-slider" style={{ position: "relative" }}>
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
          src={imageList[currentImageIndex].src}
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
    </main>
  );
}
