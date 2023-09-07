"use client";
import { useEffect, useRef } from "react";

export default function Webcam() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const mediaDevices: MediaDevices = navigator.mediaDevices;
        const video: HTMLVideoElement = videoRef.current!;
        const constraints = {
            video: true,
        };
        mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            video!.srcObject = stream;
        });
    }, []);

    return (
        <div>
            <video ref={videoRef} className="w-full h-full" autoPlay muted></video>
        </div>
    )
}
