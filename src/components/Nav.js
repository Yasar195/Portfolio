import React from "react";

const Nav = () => {
    return(
        <div className="w-full h-20 flex sticky top-0 z-10 bg-white px-2 lg:px-6">
            <div className="w-3/4 h-full flex items-center justify-start p-4 text-glossyblue">
                <a href="#intro"><h1 className="font-bold">yasararafath.dev</h1></a>
            </div>
            <div className="nav invisible lg:visible w-2/4 h-full flex flex-col lg:flex-row items-center justify-start p-4 text-secondarytext flex items-center justify-evenly text-xl transition">
                <p className="hover:cursor-pointer rounded-full hover:text-glossyblue"><a href="#projects">Projects</a></p>
                <p className="hover:cursor-pointer rounded-full hover:text-glossyblue"><a href="#contact">Contact</a></p>
                <p className="hover:cursor-pointer rounded-full hover:text-glossyblue"><a href="#about">About</a></p>
            </div>
        </div>
    )
}

export default Nav;