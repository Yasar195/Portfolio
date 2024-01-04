import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import '../styles/Settings.css';

const Setting = () => {

    const handlePress = () => {
        const dialogue = document.querySelector('.expand')
        dialogue.classList.toggle('view')
    }

    return (
        <div className="w-full h-20 sticky bottom-10 right-10">
            <div className="w-full h-full relative flex items-center justify-end px-4 lg:px-10">
                <div className="expand w-fit bg-white shadow-2xl h-10 px-16 rounded-full relative left-10 flex items-center justify-center">
                    <div className="w-fit h-fit hover:cursor-pointer flex items-center justify-center p-2 border-2 border-secondary text rounded-full"><FaMoon className="text-sm"/></div>
                </div>
                <div onClick={handlePress} className="settings bg-glossyblue hover:cursor-pointer w-10 h-10 rounded-full shadow-lg text-white flex items-center justify-center p-2"><IoSettingsSharp/></div>
            </div>
        </div>
    )
}

export default Setting;