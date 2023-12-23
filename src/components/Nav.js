import React from "react";

const Nav = () => {
    return(
        <div className="w-full h-20 flex sticky top-0 z-10 bg-white">
            <div className="w-3/4 h-full flex items-center justify-start p-4 text-blue-500">
                <h1 className="font-bold">yasararafath.dev</h1>
            </div>
            <div className="invisible lg:visible w-2/4 h-full flex flex-col lg:flex-row items-center justify-start p-4 text-gray-500 flex items-center justify-evenly text-xl">
                <p className="hover:cursor-pointer"><a href="#about">About</a></p>
                <p className="hover:cursor-pointer"><a href="#projects">Projects</a></p>
                <p className="hover:cursor-pointer"><a href="#contact">Contact</a></p>
            </div>
        </div>
    )
}

export default Nav;