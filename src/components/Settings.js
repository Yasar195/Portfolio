import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import '../styles/Settings.css';

const Setting = () => {
    return (
        <div className="w-full h-20 sticky bottom-10 right-10">
            <div className="w-full h-full relative flex items-center justify-end px-4 lg:px-10">
                <div className="settings bg-glossyblue hover:cursor-pointer w-10 h-10 rounded-full shadow-lg text-white flex items-center justify-center p-2"><IoSettingsSharp/></div>
            </div>
        </div>
    )
}

export default Setting;