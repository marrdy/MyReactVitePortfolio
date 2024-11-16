import { useState } from 'react'
import NavBar from './Components/NavBar'
import { motion } from 'framer-motion';
import Aboutme from './Components/AboutMe'
import bg from './assets/circuit-board.svg'
import Skills from './Components/Skills'
import QnA from './Components/QNA'
import Footer from './Components/footer'
import Gallery from './Components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
          < motion.div className='fixed w-full h-full bg-black z-10 justify-center' animate={{opacity:0,visibility:'hidden'}} transition={{duration:1.5}}>

    </motion.div>

    
      <NavBar/> 
      <div className='overflow-hidden '>
        <Aboutme/>
        <Skills/>
        <QnA/>
        <Gallery/>
        <Footer/>
      </div>

    </div>
   

           

        

    
  )
}

export default App
