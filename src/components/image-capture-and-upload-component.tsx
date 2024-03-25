"use client";
import { useRef, useCallback } from "react";
import Webcam from "react-webcam";

interface ImageCaptureProps {
    imageCallback: (imageBlob: Blob) => void;
}

export default function ImageCapture({ imageCallback }: ImageCaptureProps) {
    const videoConstraints = {
        width: 720,
        height: 720,
        facingMode: "environment",
    };

    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageData = webcamRef.current.getScreenshot();
        imageCallback(new Blob([imageData], { type: "image/jpeg"}));
    }, [webcamRef, imageCallback]);
    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                height={720}
                screenshotFormat="image/jpeg"
                width={720}
                videoConstraints={videoConstraints}
            ></Webcam>
            <button onClick={capture}>Capture photo</button>
        </div>
    );
}
