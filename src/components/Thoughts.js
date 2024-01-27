import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { FaClock } from "react-icons/fa6";

const Thoughts = () => {

    const [load, setLoad] = useState(true)
    const [thoughts, setThoughts] = useState([])

    useEffect(()=> {
        axios.get('https://5kp6ifla0b.execute-api.ap-south-1.amazonaws.com/')
        .then((response)=> {
            setThoughts([...response.data.thoughts])
            setLoad(false)
        })
        .catch(()=> {
            setThoughts([])
            setLoad(false)
        })
    }, [])

    return(
        <div className="w-full h-fit text-secondarytext dark:text-secondarytextdark">
            {
                load ? <div className="w-full h-20 flex items-center justify-center">
                    <h1 className="text-base">Loading...</h1>
                </div>
                :
                thoughts.length===0? <div className="text-base w-full h-20 flex items-center justify-center">
                    <h1>Hmm i have no thoughts now 🤔.</h1>
                </div>
                :
                <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 p-2 gap-4">
                    {
                        thoughts.map((thought, index)=> <div className="relative text-xl mb-4 shadow-lg rounded-lg p-4" key={index}>
                            <h1>{thought.thought}</h1>
                            <p className="text-base mt-8 flex items-center justify-start gap-2">Posted <FaClock />{<ReactTimeAgo date={thought.createdAt}/>}</p>
                        </div>)
                    }
                </div>
            }
        </div>
    )
}

export default Thoughts;