import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import profile from "../../assets/profile.png";
export const Header = () => {
    return (React.createElement("header", { className: "flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-20" },
        React.createElement("div", { className: "flex items-center" },
            React.createElement("div", { className: "relative" },
                React.createElement("button", { className: "p-2 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30" },
                    React.createElement(Bars3Icon, { className: "w-6 h-6 text-white" }))),
            React.createElement("h1", { className: "ml-4 text-white text-2xl font-bold" }, "Aris")),
        React.createElement("div", { className: "flex items-center space-x-4" },
            React.createElement("div", { className: "relative" },
                React.createElement("button", { className: "p-2 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30" },
                    React.createElement(BellIcon, { className: "w-6 h-6 text-white" }))),
            React.createElement("img", { src: profile, alt: "Profile", className: "w-10 h-10 rounded-full border-2 border-white" }))));
};
