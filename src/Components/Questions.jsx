import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Questions() {
  const [Show, SetShow] = useState(false);

  const ToggleShow = () => {
    SetShow(!Show);
  };

  return (
    <div className='bg-white rounded-md m-10 p-10'>
      <div className='flex'>
        <div className='500 w-full'>
          <h1>When did you start programming and what is your first language?</h1>
        </div>
        <div>
          <motion.button
            onClick={ToggleShow}
            animate={{ rotate: Show ? 180 : 0 }}
            className='rounded-full bg-slate-400'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {Show && (
          <motion.div
            initial={{   height: 0 ,opacity:0}}
            animate={{ height: "auto" ,opacity:1}}
            exit={{  height: 0  ,opacity:0}}
            className='bg-white rounded-md text-2xl max-w-full'
          >
            <p className='break-words overflow-wrap-normal'>
            Object-Oriented Programming is a programming paradigm based on the concept of 'objects,' which can contain data and code. OOP languages like Java, C++, and Python enable developers to create modular, reusable code. The four key principles of OOP are encapsulation, inheritance, polymorphism, and abstraction. OOP is widely used for building complex, scalable software systems.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Questions;
