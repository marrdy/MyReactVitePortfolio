import React from 'react' 
import mypic from '../assets/Metransparent.png'
import Home from './Home'
function AboutMe() {
  return (
    <div className='bg-transparent text-white text-left py-16' id="About-me">

        
        <div className='md:flex'>
          <div className='bg-transparent absolute md:static pb-96 w-full'>
              <img src ={mypic} className='object-cover bg-transparent absolute -z-10 md:right-1/2 mt-44 md:mt-0 '/> 
          </div>
          <div className='bg-transparent mx-auto'>
          <Home/>
          <div className='bg-gray-300 shadow-2xl shadow-red-400 rounded-md py-10 px-5 mt-20'>
          <h1 className='text-4xl text-black font-bold mb-8'>
             About me
          </h1>
          <div className='bg-transparent text-gray-700'>
                <p className='justify-center leading-relaxed text-1xl  text-1xl text-ellipsis md:text-3xl'>
                 My name is Marc Eddyson, I recently 
                </p>
                <p className='justify-center leading-relaxed text-1xl  text-1xl text-ellipsis md:text-1xl  mb-10'>
                graduated from EARIST GMA with a Bachelor's degree in Computer Science. During my time as a student, I gained valuable experience in programming by assisting my classmates and peers with their projects(to know more about what I do, click <a href="#Experience" className='underline text-blue-600'>Here</a>), which also helped me cover my daily expenses.
                </p>
                <p  className='leading-relaxed m-1 text-1xl  text-1xl text-ellipsis md:text-1xl  mb-10'>
                While I may not yet have formal work experience, I am confident that the skills I have developed can be effectively applied in a professional environment.
                </p>
                <p className='leading-relaxed m-1 text-1xl  text-1xl text-ellipsis md:text-1xl mb-10'>
                I am committed to delivering results that not only meet but exceed expectations.
                </p>
          </div>
          </div>

          </div>


        </div>
       

       

    </div>
  )
}

export default AboutMe
