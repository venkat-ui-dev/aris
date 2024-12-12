
import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import profile from "../../assets/profile.png";

export const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-20">
            {/* Left Section */}
            <div className="flex items-center">
                <div className="relative">
                    <button className="p-2 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30">
                        <Bars3Icon className="w-6 h-6 text-white" />
                    </button>
                </div>
                <h1 className="ml-4 text-white text-2xl font-bold">Aris</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                {/* Bell Icon */}
                <div className="relative">
                    <button className="p-2 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30">
                        <BellIcon className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Profile Image */}
                <img
                    src={profile}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white"
                />
            </div>
        </header>
    );
}
