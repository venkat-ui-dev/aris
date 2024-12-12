import React, { createContext, useContext, useState } from 'react';
const SpeechContext = createContext(undefined);
export const SpeechProvider = ({ children }) => {
    const [transcribedText, setTranscribedText] = useState("");
    return (React.createElement(SpeechContext.Provider, { value: { transcribedText, setTranscribedText } }, children));
};
export const useSpeechContext = () => {
    const context = useContext(SpeechContext);
    if (!context) {
        throw new Error("useSpeechContext must be used within a SpeechProvider");
    }
    return context;
};
