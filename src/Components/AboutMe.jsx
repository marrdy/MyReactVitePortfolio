import React from 'react' 

import Home from './Home'
import { motion,useScroll } from 'framer-motion'
function AboutMe() {
  const {scrollY} = useScroll();
  return (
    <div className=' text-white text-left' id="About-me">
        <div className='md:flex '   initial={{x:"100vw"}}>
          <div className='bg-black max-w-full'>
          <Home/>
          </div>


        </div>
       

       

    </div>
  )
}

export default AboutMe
