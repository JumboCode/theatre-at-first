"use client";
import {
    useRef,
    useCallback,
    MutableRefObject,
    useEffect,
    useState,
} from "react";
import Webcam from "react-webcam";
import { Camera } from "./buttonGraphics";

interface ImageCaptureProps {
    imageCallback: (imageBlob: Blob) => void;
}

export default function ImageCapture({ imageCallback }: ImageCaptureProps) {
    const [hasPermission, setHasPermission] = useState(true);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .catch((error: Error) => {
                if (error.name === "NotAllowedError") {
                    setHasPermission(false);
                }
            });
    }, []);

    const videoConstraints = {
        width: 1080,
        height: 1920,
        facingMode: "environment",
    };

    const webcamRef: MutableRefObject<Webcam | null> = useRef(null);
    const capture = useCallback(() => {
        const base64 = webcamRef.current?.getScreenshot()!;

        // Decode the base64 string to a binary string
        const binaryStr = atob(base64.split(",")[1]);
        let length = binaryStr.length;
        const uint8Array = new Uint8Array(length);

        // Convert the binary string to a typed array
        while (length--) {
            uint8Array[length] = binaryStr.charCodeAt(length);
        }

        const imgBlob = new Blob([uint8Array], { type: "image/jpeg" });
        imageCallback(imgBlob);
    }, [webcamRef, imageCallback]);

    if (!hasPermission) {
        return (
            <p>
                Please allow camera access for this website to use this feature.
            </p>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Webcam
                audio={false}
                ref={webcamRef}
                height={1920}
                screenshotFormat="image/jpeg"
                width={1080}
                videoConstraints={videoConstraints}
                className="rounded-xl"
            />
            <button
                onClick={capture}
                className="mt-2 py-3 pr-3 pl-3 rounded-3xl text-gray-600 bg-gray-100 border-4 border-amber-700 hover:bg-gray-600 hover:text-gray-100"
            >
                <Camera />
            </button>
        </div>
    );
}
