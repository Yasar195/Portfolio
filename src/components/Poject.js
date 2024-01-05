import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Project = ({ number, name, description, techs, url }) => {
    return(
        <div className='w-full h-fit border-2 border-gray-100 dark:border-gray-700 p-4 rounded-lg mb-4'>
              <div className='w-full h-fit p-4'>
                <div className='w-full h-10 flex items-center justify-start gap-6 text-xl'>
                  <div className='w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center'><h1>{number}</h1></div>
                  <h1 className='dark:text-white'>{name}</h1>
                </div>
              </div>
              <div className='w-full h-fit px-4 pb-4 text-xl text-secondarytext dark:text-secondarytextdark'>
                <p>{description}</p>
              </div>
              <div className='invisible md:visible w-full h-12 px-4 flex items-center justify-start text-xl gap-6 mb-4 dark:text-white'>
                <h1>Technologies:-</h1>
                {
                    techs.map((skill, index)=><div key={index}>{skill}</div>)
                }
              </div>
              <div className='w-full h-12 px-4 flex items-center justify-center lg:justify-end'>
                <a href={url} target='blank'><button className='text-lg text-white rounded-lg bg-glossyblue px-10 lg:px-12 flex items-center justify-center gap-6 py-2'>Checkout <FaArrowRightLong/></button></a>
              </div>
            </div>
    )
}

export default Project;