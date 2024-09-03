import React, { useState } from 'react';
import Contacttab from './Contact';
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const openContact = () => setIsOpen(true);
    const closeContact = () => {setIsOpen(false)};
    const defaultAnimations = {
        hidden : {
            opacity:0
        },
        visible:{
            opacity:1
        }
    }
    return (
        <motion.div className='flex justify-end'>

            <div className={isOpen ? 'fixed inset-0 w-full h-full z-50' : 'hidden'}>
            {isOpen && (
                
                <Contacttab onClose={closeContact} />
            )}
            </div>

            <motion.div animate={{x:0}} transition={{duration:2}} initial={{x:"100vw"}}
                className="text-black text-center md:mb-10 md:shadow-2xl space-y-80 md:space-y-0 shadow-red-500 rounded-l-full w-max bg-transparent md:bg-gray-300"
                id="Home"
            >
                
                <h1 className="text-gray-500 ml-32 text-2xl text-right md:text-4xl md:mb-0 md:mt-0 rounded-l-full md:bg-transparent bg-white p-8">
                    I'm{" "}
                    <motion.span  className="text-transparent font-bold bg-clip-text bg-black" initial="hidden" animate="visible"transition={{ staggerChildren:0.4,delayChildren:3}} aria-hidden>
                        {"Marc ".split("").map((char)=>(
                            <motion.span variants={defaultAnimations} className="text-transparent font-bold bg-clip-text bg-black">{char}</motion.span>)
                        )}
                    </motion.span >
                    <motion.span  className="text-transparent font-bold bg-clip-text bg-black" initial="hidden" animate="visible"transition={{ staggerChildren:0.4}} aria-hidden>
                        {"Eddyson".split("").map((char)=>(
                            <motion.span variants={defaultAnimations} className="text-transparent font-bold bg-clip-text bg-black">{char}</motion.span>)
                        )}
                    </motion.span >
                    <motion.span  className="text-transparent font-bold bg-clip-text bg-black" initial="hidden" animate="visible"transition={{ staggerChildren:0.4}} aria-hidden>
                        {" V Cruz".split("").map((char)=>(
                            <motion.span variants={defaultAnimations} className="text-transparent font-bold bg-clip-text bg-black">{char}</motion.span>)
                        )}
                    </motion.span >
                    <br />
                    
                    <TypeAnimation
                    sequence={["Web Dev", 1000, "Mobile Dev", 1000, "Game Dev", 1000]}
                     speed={50}
                     repeat={Infinity}
                    
                     />
                </h1>
                
                <div className=" bg-transparent md:bg-transparent p-10">
                    <div className="flex space-x-9 justify-center ">
                        <button
                            className="shadow-md bg-gradient-to-r from-red-800 to-green-900 font-extrabold text-white md:inline transform hover:scale-110 px-8 py-4 rounded-full flex items-center justify-center space-x-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                                />
                            </svg>

                            <span className="inline-block">My resume</span>
                        </button>
                        <button
                            onClick={openContact}
                            className="shadow-md bg-gradient-to-r from-red-800 to-green-600 font-extrabold text-white md:inline transform hover:scale-110 px-8 py-4 rounded-full flex items-center justify-center space-x-2"
                        >
                            <svg
                                className="w-6 h-6 inline-block"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                            <span className="inline-block">Contact me</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Home;
