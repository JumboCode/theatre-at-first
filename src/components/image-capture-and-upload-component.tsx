"use client";
import { useRef, useCallback, MutableRefObject } from "react";
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

    const webcamRef: MutableRefObject<Webcam | null> = useRef(null);
    const capture = useCallback(() => {
        // imageData is base64 encoded jpeg
        const imageData = webcamRef.current?.getScreenshot()!;
        const imgBlob = new Blob([imageData], { type: "image/jpeg" });
        imageCallback(imgBlob);
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
