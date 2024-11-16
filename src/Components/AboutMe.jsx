import React from 'react' 

import Home from './Home'
import { motion,useScroll } from 'framer-motion'
function AboutMe() {
  const {scrollY} = useScroll();
  return (
    <div className=' text-white text-left bg-black max-w-full' id="About-me">
          <Home/>
    </div>
  )
}

export default AboutMe
