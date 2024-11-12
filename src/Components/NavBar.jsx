import React, { useState,useEffect } from 'react';
import icon from '../assets/Icon.png';
import { motion } from 'framer-motion';
const NavButtonFont = "text-white hover:text-yellow-400 hover:bg-red-900 p-5 w-full whitespace-nowrap";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down, hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.nav className="
  shadow-xl
  
  w-full
  backdrop-blur-md
  bg-slate-900
  bg-opacity-60
  text-white
  // Base (smallest screen by default - typically phones)
  flex
  shadow-red-700
  p-3 // Adjust padding for smaller screens
  text-base // Smaller text size for phones
  // Small screens (sm breakpoint, usually 640px and up)
  sm:p-4
  sm:text-lg
  // Medium screens (md breakpoint, typically 768px and up)
  md:fixed
  md:top-0 
  md:left-0 
  md:z-10
  md:p-5
  md:text-xl

  // Extra-large screens (xl breakpoint, typically 1280px and up)
  xl:fixed
  xl:top-0 
  xl:left-0 
  xl:z-10
  xl:p-5
  xl:text-3xl
"
    
    initial={{ y: 0 }}
    animate={{ y: showNavbar ? 0 : '-200%' }}
    transition={{ type: '', velocity: 2 }}
    >
      <div className=' flex-1 flex items-center  pl-10'>
        {/* Logo */}
        <div className='font-bold flex items-center'>
          <img src={icon} alt="Icon" className='
          
          xl:w-50 
          xl:h-50
          
          ' 
          />
          <h1 className='ml-2'>Marrdy</h1>
        </div>








      </div>
      <button
          className='md:hidden text-white focus:outline-none justify-self-end'
          onClick={toggleMenu}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {/* Links (Hidden on small screens) */}
        <div className='hidden md:flex  flex-1 space-x-6  justify-self-end'>
          <a href="#About-me" className={NavButtonFont}>About me</a>
          <a href="#Education" className={NavButtonFont}>Education</a>
          <a href="#Experience" className={NavButtonFont}>Experience</a>
          <a href="#Q&A" className={NavButtonFont}>Q&A</a>
          <a href="#Gallery" className={NavButtonFont}>Gallery</a>
        </div>
      {/* navbar for mobile res*/}
      <div className={`fixed md:hidden top-0 left-0 w-64 h-full bg-red-800 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
        <div className='flex justify-end p-4 bg-red-900'>
          <button
            className='text-white focus:outline-none'
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className='flex flex-col items-start space-y-6 bg-red-900'>
          
          <a href="#Home" className={NavButtonFont} onClick={toggleMenu}>Home</a>
          <a href="#About-me" className={NavButtonFont} onClick={toggleMenu}>About me</a>
          <a href="#Education" className={NavButtonFont} onClick={toggleMenu}>Education</a>
          <a href="#Experience" className={NavButtonFont} onClick={toggleMenu}>Experience</a>
          <a href="#Skills" className={NavButtonFont} onClick={toggleMenu}>Contact me</a>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
