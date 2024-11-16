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
      <div className='absolute -z-50 flex-grow' 
      style={{
      backgroundImage: ` url('src/assets/circuit-board.svg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    > 
      <NavBar/> 
      <div className='overflow-hidden '>
        <Aboutme/>
        <Skills/>
        <QnA/>
        <Gallery/>
        <Footer/>
      </div>

    </div>
    </div>

           

        

    
  )
}

export default App
