import React from "react";
import { Header } from "./components/common/Header";
import { BackgroundAnimation } from "./components/common/BackgroundAnimation";
import { Sphere } from "./components/common/Sphere";
import { RecognizedContent } from "./components/RecognizedContent/RecognizedContent";
import { Footer } from "./components/common/Footer";
import { SpeechProvider } from "./context/SpeechContext";
function App() {
    return (React.createElement(SpeechProvider, null,
        React.createElement("div", { className: "relative w-full h-screen bg-gradient-to-b from-blue-500 to-blue-700 overflow-hidden" },
            React.createElement("div", { className: "absolute inset-0 z-0" },
                React.createElement(BackgroundAnimation, null)),
            React.createElement("div", { className: "relative z-10 flex flex-col items-center justify-between h-full" },
                React.createElement(Header, null),
                React.createElement("div", { className: "flex-1 flex flex-col items-center justify-center" },
                    React.createElement(Sphere, null),
                    React.createElement(RecognizedContent, null)),
                React.createElement(Footer, null)))));
}
export default App;
