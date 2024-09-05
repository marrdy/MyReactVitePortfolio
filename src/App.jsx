import { useState } from 'react'
import NavBar from './Components/NavBar'
import { motion } from 'framer-motion';
import Aboutme from './Components/AboutMe'
import Edu from './Components/Education'
import bg from './assets/circuit-board.svg'
import Skills from './Components/Skills'
import QnA from './Components/QNA'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          < motion.div className='fixed w-full h-full bg-black z-10 justify-center' animate={{opacity:0,visibility:'hidden'}} transition={{duration:1.5}}>

    </motion.div>
      <div className='absolute -z-50 flex-grow' 
      style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    > 
      <NavBar/> 
      <div className='overflow-hidden'>
        <Aboutme/>
        <Edu/>
        <Skills/>
        <QnA/>
      </div>

    </div>
    </div>

           

        

    
  )
}

export default App
