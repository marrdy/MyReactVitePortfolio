import React from 'react' 
import mypic from '../assets/me.jpg'
function AboutMe() {
  return (
    <div className='text-white text-left py-16 ml-16 mr-16' id="About-me">
        <h1 className='text-4xl font-bold text-left md:text-center'>
             About me
        </h1>
        
        <div className='flex items-center'>
            <img src={mypic} className='rotate-0 w-48 h-56 shadow-md border-8 md:w-72 md:h-80 md:rotate-12'/>
            <div>
                <p className='leading-relaxed m-4 text-1xl text-yellow-300 text-1xl text-ellipsis ml-14 md:text-3xl  mb-10'>
                &nbsp;&nbsp;&nbsp; My name is Marc Eddyson, and I recently graduated from EARIST GMA with a Bachelor's degree in Computer Science. During my time as a student, I gained valuable experience in programming by assisting my classmates and peers with their projects(to know more about what I do, click <a href="#Experience" className='underline text-green-300'>Here</a>), which also helped me cover my daily expenses.
                </p>
                <p  className='leading-relaxed m-4 text-1xl text-yellow-300 text-1xl text-ellipsis ml-14 md:text-3xl  mb-10'>
                While I may not yet have formal work experience, I am confident that the skills I have developed can be effectively applied in a professional environment.
                </p>
                <p className='leading-relaxed m-4 text-1xl text-yellow-300 text-1xl text-ellipsis ml-14 md:text-3xl mb-10'>
                I am committed to delivering results that not only meet but exceed expectations.
                </p>
            </div>

        </div>
       

       

    </div>
  )
}

export default AboutMe
