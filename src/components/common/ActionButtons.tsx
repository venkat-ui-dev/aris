import React from "react";
import { SpeakerWaveIcon, MicrophoneIcon, DocumentTextIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSpeechContext } from "../../context/SpeechContext";

export const ActionButtons = () => {
    const { setTranscribedText } = useSpeechContext();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [recognition, setRecognition] = useState<any>(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.lang = 'en-US'; // Recogntion Language
            recognitionInstance.interimResults = true; // Set to true to get real-time results

            recognitionInstance.onstart = () => {
                console.log('Speech recognition started');
            };

            recognitionInstance.onresult = (event: any) => {
                const currentText = event.results[0][0].transcript;
                setTranscribedText(currentText); // Update recognized text as the user speaks to context API
            };

            recognitionInstance.onerror = (event: any) => {
                console.error('Speech recognition error', event);
            };
            setRecognition(recognitionInstance);
        }
    }, []);

    // Function to handle microphone click
    const handleMicClick = () => {
        if (recognition) {
            if (isSpeaking) {
                recognition.stop(); // Stop recording
            } else {
                recognition.start(); // Start recording
            }
            setIsSpeaking(!isSpeaking); // Toggle for "Hold to speak" text visibility
        }
    };

    const handleVolumeIconClick = () => {
        setIsMuted(!isMuted);
    }

    return (
        <div className="flex flex-col items-center mt-16 space-y-4">
            {/* Icon Buttons */}
            <div className="grid grid-cols-3 gap-12 w-full max-w-md">
                {/* Volume Icon */}
                <button
                    onClick={handleVolumeIconClick}
                    className={`w-16 h-16 rounded-full text-white hover:bg-blue-300 ${isMuted ? 'bg-red-500' : 'bg-blue-400'} cursor-pointer`}
                >
                    {isMuted ? (
                        <SpeakerXMarkIcon className="w-8 h-8" />
                    ) : (
                        <SpeakerWaveIcon className="w-8 h-8" />
                    )}
                </button>

                {/* Microphone Icon */}
                <button
                    onClick={handleMicClick}
                    className={`w-16 h-16 rounded-full ${isSpeaking ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-400 text-white hover:bg-green-600'} cursor-pointer flex justify-center items-center`}
                >
                    <MicrophoneIcon className="w-8 h-8" />
                </button>

                {/* Documentation Icon */}
                <button className="w-16 h-16 rounded-full bg-blue-400 text-white hover:bg-blue-300 cursor-pointer flex justify-center items-center">
                    <DocumentTextIcon className="w-8 h-8" />
                </button>
            </div>

            {/* Text Below Mic Icon */}
            <div className={`transition-all duration-200 ${isSpeaking ? 'block' : 'hidden'} mt-2`}>
                <p className="text-white text-lg">Hold to speak</p>
            </div>
        </div>

    );
}