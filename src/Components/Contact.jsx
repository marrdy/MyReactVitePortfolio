import React from 'react';
import { motion } from 'framer-motion';
function Contact({ onClose }) {
    const copyTextToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Text copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        < motion.div className='fixed inset-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 z-50' animate={{x:0}} initial={{x:-100}}>
            <div className='bg-white rounded-2xl p-10'>
                <div className='flex justify-between items-center mb-10'>
                    <motion.h1 className='text-2xl text-gray-900' animate={{x:100}} initial={{x:-100}}>Contact me through:</motion.h1>
                    <button
                        onClick={onClose}
                        className='w-12 h-12 flex items-center justify-center bg-slate-700'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    </button>
                </div>
                <div className='flex space-x-10 mb-10'>
          <div className='flex flex-col items-center bg-slate-300 rounded-3xl p-4'>
            <button className='h-44 w-44 flex items-center justify-center  rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48">
                <path fill="#3b5998" d="M24 2C12.954 2 4 10.954 4 22c0 9.941 7.163 18.178 16.438 19.674V29.56h-3.926v-5.437h3.926v-4.166c0-3.898 2.32-6.044 5.875-6.044 1.703 0 3.484.308 3.484.308v3.83h-1.963c-1.935 0-2.535 1.2-2.535 2.42v3.654h4.306l-.688 5.437h-3.618v12.114C36.837 40.178 44 31.941 44 22 44 10.954 35.046 2 24 2z"/>
              </svg>
            </button>
            <h1 className='text-center text-gray-800 mt-4'>Facebook</h1> 
          </div>
          <div className='flex flex-col items-center bg-slate-300 rounded-3xl p-4'>
            <button className='h-44 w-44 flex items-center justify-center  rounded-full'>
            <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>
            </button>
            <h1 className='text-center text-gray-800 mt-4'>LinkIn</h1> 
          </div>
          <div className='flex flex-col items-center bg-slate-300 rounded-3xl p-4'>
            <button className='h-44 w-44 flex items-center justify-center  rounded-full'>
            <svg width="800px" height="800px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g>
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero">
            </path>
                </g>
            </svg>
            </button>
            <h1 className='text-center text-gray-800 mt-4'>Discord</h1> 
          </div>
        </div>
                <h1 className='text-2xl text-gray-900 mb-10'>Contact Number:
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        copyTextToClipboard('+639919170254');
                    }} className='text-2xl text-sky-600 underline'>+639919170254</a>
                </h1>
            </div>
        </motion.div>
    );
}

export default Contact;
