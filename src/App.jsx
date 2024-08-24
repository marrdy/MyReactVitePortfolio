import { useState } from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Aboutme from './Components/AboutMe'
import Edu from './Components/Education'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-r from-black via-orange-900 via-50% to-black'>
      <NavBar /> 
       <Home id="Home"/>
       <Aboutme/>
       <Edu/>
    </div>
           

        

    
  )
}

export default App
