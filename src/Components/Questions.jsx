import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Questions = ({ ques, Ans}) =>{
  const [Show, SetShow] = useState(false);

  const ToggleShow = () => {
    SetShow(!Show);
  };

  return (
    <div className='bg-slate-900 text-3xl rounded-md  '>
      <div className='flex'>
        <div className='500 w-full'>
          <h1 className='text-slate-300'>{ques}</h1>
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

      
        {Show && (
          <motion.div

          >
            <p className='break-words overflow-wrap-normal text-base text-slate-300'>
            {Ans}
            </p>
          </motion.div>
        )}
     
    </div>
  );
}

export default Questions;
