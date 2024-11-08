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
    text-2xl 
    shadow-xl
    backdrop-blur-md
    bg-slate-900
    bg-opacity-60
    text-white px-8 
    flex-grow 
    md:px-16 
    lg:px-24 
    fixed
    w-full 
    top-0 
    left-0 
    z-10
    shadow-red-700"
    
    initial={{ y: 0 }}
    animate={{ y: showNavbar ? 0 : '-200%' }}
    transition={{ type: '', velocity: 2 }}
    >
      <div className='container flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold flex items-center'>
          <img src={icon} alt="Icon" className='w-10 h-10' />
          <h1 className='ml-2'>Marrdy</h1>
        </div>

        {/* Links (Hidden on small screens) */}
        <div className='hidden md:flex space-x-6 '>
          <a href="#About-me" className={NavButtonFont}>About me</a>
          <a href="#Education" className={NavButtonFont}>Education</a>
          <a href="#Experience" className={NavButtonFont}>Experience</a>
          <a href="#Q&A" className={NavButtonFont}>Q&A</a>
          <a href="#Gallery" className={NavButtonFont}>Gallery</a>
        </div>





        <button
          className='md:hidden text-white focus:outline-none'
          onClick={toggleMenu}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* navbar for mobile res*/}
      <div className={`fixed top-0 left-0 w-64 h-full bg-red-800 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
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
