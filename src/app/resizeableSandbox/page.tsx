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
          className="slider-button"
          onClick={prevImage}
          style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
        >
          Prev
        </button>
        <ResizeableIMG
          width={600}
          height={400}
          src={imageList[currentImageIndex].src}
          alt="pics of cookies"
        />
        <button
          className="slider-button"
          onClick={prevImage}
          style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
        >
          Next
        </button>
      </div>
    </main>
  );
}
