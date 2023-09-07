"use client";
import { useEffect, useRef, useState } from "react";


export default function Webcam() {
    const [isCameraAllowed, setIsCameraAllowed] = useState<boolean>(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (isCameraAllowed) {
            const mediaDevices: MediaDevices = navigator.mediaDevices;
            const video: HTMLVideoElement = videoRef.current!;
            const constraints = {
                video: true,
            };
            mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                video!.srcObject = stream;
            })
            .catch((err) => {
                setIsCameraAllowed(false);
                console.log(err);
            });
        }
        else {
            const video: HTMLVideoElement = videoRef.current!;
            video!.srcObject = null;
        }

    }, [isCameraAllowed]);

    return (
        <div>
            {
                !isCameraAllowed && <span>Permission not granted</span>
            }
            <video ref={videoRef} autoPlay muted />
            <div>
                <button id="toggle-camera" onClick={()=>setIsCameraAllowed(!isCameraAllowed)}>
                    Turn on camera
                </button>
                <button>
                    Turn on camera
                </button>
            </div>
        </div>
    )
}
