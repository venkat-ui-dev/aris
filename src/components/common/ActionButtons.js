import React from "react";
import { SpeakerWaveIcon, MicrophoneIcon, DocumentTextIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSpeechContext } from "../../context/SpeechContext";
export const ActionButtons = () => {
    const { setTranscribedText } = useSpeechContext();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [recognition, setRecognition] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.lang = 'en-US'; // Recogntion Language
            recognitionInstance.interimResults = true; // Set to true to get real-time results
            recognitionInstance.onstart = () => {
                console.log('Speech recognition started');
            };
            recognitionInstance.onresult = (event) => {
                const currentText = event.results[0][0].transcript;
                setTranscribedText(currentText); // Update recognized text as the user speaks to context API
            };
            recognitionInstance.onerror = (event) => {
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
            }
            else {
                recognition.start(); // Start recording
            }
            setIsSpeaking(!isSpeaking); // Toggle for "Hold to speak" text visibility
        }
    };
    const handleVolumeIconClick = () => {
        setIsMuted(!isMuted);
    };
    return (React.createElement("div", { className: "flex flex-col items-center mt-16 space-y-4" },
        React.createElement("div", { className: "flex justify-around w-full max-w-md space-x-12" },
            React.createElement("button", { onClick: handleVolumeIconClick, className: `w-16 h-16 flex justify-center items-center rounded-full text-white hover:bg-blue-300 ${isMuted ? 'bg-red-500' : 'bg-blue-400'}` }, isMuted ? (React.createElement(SpeakerXMarkIcon, { className: "w-8 h-8" })) : (React.createElement(SpeakerWaveIcon, { className: "w-8 h-8" }))),
            React.createElement("button", { onClick: handleMicClick, className: `w-16 h-16 flex justify-center items-center rounded-full ${isSpeaking ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-400 text-white hover:bg-green-600'}` },
                React.createElement(MicrophoneIcon, { className: "w-8 h-8" })),
            React.createElement("button", { className: "w-16 h-16 flex justify-center items-center bg-blue-400 rounded-full text-white hover:bg-blue-300" },
                React.createElement(DocumentTextIcon, { className: "w-8 h-8" }))),
        React.createElement("div", { className: `transition-all duration-200 ${isSpeaking ? 'block' : 'hidden'} mt-2` },
            React.createElement("p", { className: "text-white text-lg" }, "Hold to speak"))));
};
