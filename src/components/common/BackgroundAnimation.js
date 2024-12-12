import React from "react";
export const BackgroundAnimation = () => {
    return (React.createElement("div", { className: "relative w-full h-full overflow-hidden" },
        React.createElement("div", { className: "absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-green-400 opacity-40 blur-3xl animate-glow" }),
        React.createElement("div", { className: "absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-green-400 opacity-40 blur-3xl animate-glow" })));
};
