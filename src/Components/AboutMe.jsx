import React from 'react' 
import mypic from '../assets/Metransparent.png'
import Home from './Home'
import { motion,useScroll } from 'framer-motion'
function AboutMe() {
  const {scrollY} = useScroll();
  return (
    <div className='bg-transparent text-white text-left py-16' id="About-me">
        <div className='md:flex '   initial={{x:"100vw"}}>
          <div className='bg-transparent absolute md:static pb-96 w-full'>
              <motion.img src ={mypic} initial={{x:"-100vw",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1, delay:1}} className='object-cover bg-transparent absolute -z-10 md:right-1/2 mt-44 md:mt-0 '/> 
          </div>
          <div className='bg-transparent mx-auto space-y-64'>
          <Home/>
          <motion.div className='bg-gray-300 shadow-2xl shadow-red-400 rounded-md py-10 px-5 '   initial={{ opacity: 0,x: "50vw", }} whileInView={{ opacity: 1,x: 0 }} transition={{duration:1}}>
              <h1 className='text-4xl text-black font-bold mb-8'>
                About me 
              </h1>
              <motion.div className='bg-transparent text-gray-700'  initial={{ x: 100,opacity:0 }} whileInView={{ opacity: 1,x: 0 }} transition={{duration:1, delay:1}}>
                    <p className='justify-center leading-relaxed text-1xl  text-1xl text-ellipsis md:text-3xl'>
                    My name is Marc Eddyson, I recently 
                    </p>
                    <p className='justify-center leading-relaxed text-1xl  text-1xl text-ellipsis md:text-1xl  mb-10'>
                    graduated from EARIST GMA with a Bachelor's degree in Computer Science. During my time as a student, I gained valuable experience in programming by assisting my classmates and peers with their projects which also helped me cover my daily expenses.
                    </p>
                    <p  className='leading-relaxed m-1 text-1xl  text-1xl text-ellipsis md:text-1xl  mb-10'>
                    While I may not yet have formal work experience, I am confident that the skills I have developed can be effectively applied in a professional environment.
                    </p>
                    <p className='leading-relaxed m-1 text-1xl  text-1xl text-ellipsis md:text-1xl mb-10'>
                    I am committed to delivering results that not only meet but exceed expectations.
                    </p>
              </motion.div>
          </motion.div>

          </div>


        </div>
       

       

    </div>
  )
}

export default AboutMe
