import React from 'react';
import { useState } from 'react';
import SphereVideo from '../../assets/Sphere.webm';
export const Sphere = () => {
    const [isVideoPlay, setIsVideoPlay] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const handleAnimationEnd = () => {
        setIsAnimationComplete(true);
        setTimeout(() => setIsVideoPlay(true), 1000); // Wait for animation to finish before showing the video
    };
    return (React.createElement("div", { className: "relative flex justify-center items-center mb-6 mt-20" },
        React.createElement("div", { className: "relative w-40 h-40 rounded-full overflow-hidden" }, !isVideoPlay && !isAnimationComplete && (React.createElement("div", { className: "absolute w-full h-full rounded-full bg-gradient-to-r from-[#3CC0F2] via-[#76E1A3] to-[#74ff55] shadow-lg animate-spin", onAnimationEnd: handleAnimationEnd },
            React.createElement("div", { className: "absolute w-full h-full rounded-full bg-white opacity-30 blur-3xl" })))),
        isVideoPlay && (React.createElement("div", { className: "absolute w-60 h-60 rounded-full overflow-hidden" },
            React.createElement("video", { className: "absolute w-full h-full object-cover", autoPlay: true, muted: true, loop: false, onEnded: () => { setIsVideoPlay(false); setIsAnimationComplete(false); } },
                React.createElement("source", { src: SphereVideo, type: "video/mp4" }),
                "Your browser does not support the video tag.")))));
};
