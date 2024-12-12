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

    return (
        <div className="relative flex justify-center items-center mb-6 mt-20">
            {/* Custom sphere container */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
                {!isVideoPlay && !isAnimationComplete && (
                    <div
                        className="absolute w-full h-full rounded-full bg-gradient-to-r from-[#3CC0F2] via-[#76E1A3] to-[#74ff55] shadow-lg animate-spin"
                        onAnimationEnd={handleAnimationEnd}
                    >
                        <div className="absolute w-full h-full rounded-full bg-white opacity-30 blur-3xl"></div>
                    </div>
                )}
            </div>

            {/* Video container */}
            {isVideoPlay && (
                <div className="absolute w-60 h-60 rounded-full overflow-hidden">
                    <video
                        className="absolute w-full h-full object-cover"
                        autoPlay
                        muted
                        loop={false}
                        onEnded={() => { setIsVideoPlay(false); setIsAnimationComplete(false); }}
                    >
                        <source src={SphereVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};
