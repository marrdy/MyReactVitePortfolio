import React from 'react'
const NavButtonFont = "text-white hover:text-yellow-400"
const NavBar = () => {
  return (
    <nav className="shadow-md bg-red-800 text-white px-8 flex md:px-16 lg:px-24 fixed w-full top-0 left-0 z-10">
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>
                Marrdy
            </div>
            <div className='space-x-6'>
                <a href="#Home" className={NavButtonFont}>Home</a>
                <a href="#About-me" className={NavButtonFont}>About me</a>
                <a href="#Education" className={NavButtonFont}>Education</a>
                <a href="#Experience" className={NavButtonFont}>Experience</a>
                <a href="#Skills" className={NavButtonFont}>Skills</a>
            </div>
            <button className='bg-gradient-to-r from-yellow-800 to-yellow-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</button>
        </div>


    </nav>
  )
}

export default NavBar
