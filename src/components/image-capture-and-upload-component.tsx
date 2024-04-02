"use client";
import { useRef, useCallback, MutableRefObject } from "react";
import Webcam from "react-webcam";
import { Camera } from "./Button-Graphics";

interface ImageCaptureProps {
    imageCallback: (imageBlob: Blob) => void;
}

export default function ImageCapture({ imageCallback }: ImageCaptureProps) {
    const videoConstraints = {
        width: 720,
        height: 720,
        facingMode: "environment",
    };

    const webcamRef: MutableRefObject<Webcam | null> = useRef(null);
    const capture = useCallback(() => {
        // imageData is base64 encoded jpeg
        const imageData = webcamRef.current?.getScreenshot()!;
        const imgBlob = new Blob([imageData], { type: "image/jpeg" });
        imageCallback(imgBlob);
    }, [webcamRef, imageCallback]);
    return (
        <div className="flex flex-col items-center justify-center">
            <Webcam
                audio={false}
                ref={webcamRef}
                height={500}
                screenshotFormat="image/jpeg"
                width={1240}
                videoConstraints={videoConstraints}
            ></Webcam>
            <button
                onClick={capture}
                className="mt-2 py-3 pr-3 pl-3 rounded-3xl text-gray-600 bg-gray-100 border-4 border-amber-700 hover:bg-gray-600 hover:text-gray-100"
            >
                <Camera></Camera>
            </button>
        </div>
    );
}
