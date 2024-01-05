import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import '../styles/Settings.css';
import useTheme from "../context/theme";

const Setting = () => {
    
    const { themeMode, darkTheme, lightTheme } = useTheme()

    const handlePress = () => {
        const dialogue = document.querySelector('.expand')
        dialogue.classList.toggle('view')
    }

    const switchTheme = () => {
        if(themeMode==='dark'){
            lightTheme()
        }
        else{
            darkTheme()
        }
        handlePress()
    }

    return (
        <div className="w-full h-20 sticky bottom-10 right-10">
            <div className="w-full h-full relative flex items-center justify-end px-2 lg:px-10">
                <div className="expand w-fit bg-white dark:bg-slate-900 dark:shadow-black shadow-2xl h-10 px-16 rounded-full flex items-center justify-center dark:text-white gap-6">
                    <MdWbSunny className="w-6 h-6"/>
                    <div onClick={switchTheme} className={`toggle h-3/5 w-12 hover:cursor-pointer rounded-full flex items-center bg-slate-900 dark:bg-white ${themeMode==='dark'? 'justify-end': 'justify-start'}`}>
                        <div className="w-6 h-full bg-glossyblue rounded-full"></div>
                    </div>
                    <FaMoon className="w-4 h-4"/>
                </div>
                <div onClick={handlePress} className="settings bg-glossyblue hover:cursor-pointer w-10 h-10 rounded-full shadow-lg text-white flex items-center justify-center p-2"><IoSettingsSharp/></div>
            </div>
        </div>
    )
}

export default Setting;