import React from 'react'
import dp from '../assets/Metransparent.png'
function Home() {
  return (
    <div className=' text-black text-center md:mb-10 md:shadow-2xl space-y-24 md:space-y-0 shadow-red-500 -z-30  rounded-l-full  bg-transparent md:bg-gray-300' id="Home">

        <h1 className='text-gray-500 ml-32 text-2xl text-right md:text-4xl z-50 md:mb-0 md:mt-0 rounded-l-full md:bg-transparent bg-black p-8'>I'm{" "}
            <span className='text-transparent  font-bold bg-clip-text bg-gradient-to-r from-green-800 to-orange-700'>Marc Eddyson Cruz</span><br/>
            <h2 className='text-2xl text-gray-500'>Full stack developer.</h2>
        </h1>

 
        <div className='flex-row-reverse space-x-6 space-y-6 py-7 mr-36  sm:bg-black rounded-r-full md:bg-transparent'>
            <button className='shadow-md bg-gradient-to-r from-red-800 to-green-900 font-extrabold text-white md:inline transform transition-transform duration-300 hover:scale-110 px-8 py-4 rounded-full flex items-center justify-center space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 inline-block'>
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>

            <span className="inline-block">My resume</span>
            </button>
            <button className='shadow-md bg-gradient-to-r from-red-800 to-green-600 font-extrabold text-white md:inline transform transition-transform duration-300 hover:scale-110 px-8 py-4 rounded-full flex items-center justify-center space-x-2'>
                <svg className='w-6 h-6 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            <span className="inline-block">Contact me</span>
            </button>


        </div>
    </div>
  )
}

export default Home
