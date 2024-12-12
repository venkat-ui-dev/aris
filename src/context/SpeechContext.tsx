import React, { createContext, ReactNode, useContext, useState } from 'react'

interface SpeechContextType {
    transcribedText: string;
    setTranscribedText: (text: string) => void;
}

interface SpeechProviderProps {
    children: ReactNode;
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined);

export const SpeechProvider = ({ children }: SpeechProviderProps) => {
    const [transcribedText, setTranscribedText] = useState("");
    return (
        <SpeechContext.Provider value={{ transcribedText, setTranscribedText }}>
            {children}
        </SpeechContext.Provider>
    )
}

export const useSpeechContext = () => {
    const context = useContext(SpeechContext);
    if (!context) {
        throw new Error("useSpeechContext must be used within a SpeechProvider");
    }
    return context;
}