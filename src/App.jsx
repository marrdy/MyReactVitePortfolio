import { useState } from 'react'
import NavBar from './Components/NavBar'

import Aboutme from './Components/AboutMe'
import Edu from './Components/Education'
import Exp from './Components/Experience'
import bg from './assets/circuit-board.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='  absolute -z-50 flex-grow' 
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <NavBar/> 
      <div className=''>

        <Aboutme/>
        <Edu/>
        <Exp/>
      </div>

    </div>
           

        

    
  )
}

export default App
