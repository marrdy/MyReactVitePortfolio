import React, { useEffect,useState } from 'react';
import Contacttab from './Contact';
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import Resume from '../../public/Resume.pdf'
import mypic from '../assets/Metransparent.png'
function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [Showing, SetShow] = useState(false);
    const openContact = () => setIsOpen(true);
    const closeContact = () => { setIsOpen(false) };
    const ShowMore = () => {SetShow(!Showing)};
    const [age, setAge] = useState(0);

    useEffect(() => {
      const birthDate = new Date(2001, 3, 8); // Month is 0-indexed, so 3 = April
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
  
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
  
      setAge(calculatedAge);
    }, []);

    const defaultAnimations = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    };

    return (
        <motion.div className='flex md:mt-48 mt-10  max-w-full items-start md:mb-0 mb-32'>

            <div className={isOpen ? 'fixed inset-0 w-full h-full z-50' : 'hidden'}>
                {isOpen && (
                    <Contacttab onClose={closeContact} />
                )}
            </div>
            <div className='md:max-w-fit w-full'>
            <motion.div animate={{ x: 0 }} transition={{ duration: 2 }} initial={{ x: "-100vw" }}
                className="shadow-red-700 shadow-2xl  text-white px-12 text-center md:mb-10 md:space-y-5 rounded-r-full py-10 md:pr-36 w-auto bg-slate-900 md:bg-slate-900" // Changed from bg-transparent to bg-slate-900
                id="Home"
            >
                <h1 className="text-whit  text-left rounded-l-full md:bg-transparent">
                    I'm{" "}
                    <motion.span className="text-transparent font-bold bg-clip-text bg-red-400" initial="hidden" animate="visible" transition={{ staggerChildren: 0.4, delayChildren: 3 }} aria-hidden>
                        {"Marc ".split("").map((char, index) => (
                            <motion.span key={index} variants={defaultAnimations} className="text-transparent font-bold bg-clip-text bg-red-400">
                                {char}
                            </motion.span>)
                        )}
                    </motion.span >
                    <motion.span className="text-transparent font-bold bg-clip-text bg-red-400" initial="hidden" animate="visible" transition={{ staggerChildren: 0.4 }} aria-hidden>
                        {"Eddyson".split("").map((char, index) => (
                            <motion.span key={index} variants={defaultAnimations} className="text-transparent font-bold bg-clip-text bg-red-400">
                                {char}
                            </motion.span>)
                        )}
                    </motion.span >
                    <motion.span className="text-transparent font-bold bg-clip-text bg-red-400" initial="hidden" animate="visible" transition={{ staggerChildren: 0.4 }} aria-hidden>
                        {" V Cruz".split("").map((char, index) => (
                            <motion.span key={index} variants={defaultAnimations} className="text-transparent font-bold bg-clip-text bg-red-400">
                                {char}
                            </motion.span>)
                        )}
                    </motion.span >
                    <br />

                    <TypeAnimation
                        sequence={["Web Dev", 1000, "Mobile Dev", 1000, "Game Dev", 1000]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <div className=" bg-transparentt">
                    <div className="flex justify-center space-x-5 px-5">
                        <a href={Resume}
                           download="Resume">
                            <button
                            className="shadow-md bg-red-900 shadow-yellow-500 font-extrabold text-white md:inline transform hover:scale-110 px-5 py-2 md:px-8 md:py-5 rounded-full flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                                />
                            </svg>
                            <span className="inline-block">My resume</span>
                        </button>
                        </a>
                        <button
                            onClick={openContact}
                            className="shadow-md bg-red-900 font-extrabold shadow-yellow-500 text-white md:inline transform hover:scale-110 px-5 py-2 md:px-8 md:py-5 rounded-full flex items-center justify-center "
                        >
                            <svg
                                className="w-5 h-5 inline-block"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                            <span className="inline-block">Contact me</span>
                        </button>
                    </div>
                </div>
            </motion.div>
                        
            <div className='bg-transparent visible md:hidden w-full'>

              <motion.img src ={mypic} initial={{x:"-100vw",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1, delay:1}} className=' inset-0 -z-10 h-full w-full bg-transparent [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#63e_100%)]'/> 
          </div>
          
            <motion.div className='bg-slate-900 shadow-lg shadow-red-700 rounded-md py-10 px-5 z-50 overflow-hidden md:ml-20 max-w-full 2xl:text-xl lg:text-sm mx-5'   initial={{ opacity: 0,x: "50vw", }} whileInView={{ opacity: 1,x: 0 }} transition={{duration:1}}>
              <h1 className=' text-slate-400 font-bold mb-8'>
                About me 
              </h1>
              <motion.div className=' text-white max-w-prose '  initial={{ x: 100,opacity:0 }} whileInView={{ opacity: 1,x: 0 }} transition={{duration:1, delay:1}}>
                    <p className='justify-center leading-relaxed text-ellipsis'>
                    My name is Marc Eddyson,
                    </p>
                    <p className='justify-center leading-relaxed text-ellipsis md:  mb-10'>
                    I recently graduated from EARIST GMA with a Bachelor's degree in Computer Science. During my time as a student, I gained valuable experience in programming by assisting my classmates and peers with their projects which also helped me cover my daily expenses.
                    </p>
                    <p  className='leading-relaxed m-1 text-ellipsis md:  mb-10'>
                    While I may not yet have formal work experience, I am confident that the skills I have developed can be effectively applied in a professional environment.
                    </p>
                    <p className='leading-relaxed m-1 text-ellipsis md: mb-10'>
                    I am committed to delivering results that not only meet but exceed expectations.
                    </p>

              </motion.div>
              {Showing&&(
                <div className='
                2xl:text-4xl
                xl:text-3xl
                font-bold
                space-y-5
                '>
                    <h1>Demographic data</h1>
                    <div className='
                    2xl:text-2xl
                    xl:text-lg
                    font-bold
                    space-y-7
                    '>
                        
                        <h2>First Name : <span className='underline'>Marc Eddyson</span></h2>
                        <h2>Last Name :<span className='underline'> Cruz</span></h2>
                        <h2>Middle Name :<span className='underline'> Valles</span></h2>
                        <h2>Age : <span className='underline'>{age} </span></h2>
                    </div>
                    <h1>Educational attainments</h1>
                    <div className='
                    2xl:text-2xl
                    xl:text-lg
                    font-bold
                    '>
                        
                        <h2>Milagrosa Elementary School</h2>
                        <h3 className='text-sm mb-5 underline'>2006-2009</h3>
                        <h2>Beatitude Carmona</h2>
                        <h3 className='text-sm mb-5 underline'>2009-2012</h3>
                        <h2>Saint Gabriel</h2>
                        <h3 className='text-sm mb-5 underline'>2012-2013</h3>
                        <h2>Carmona National Highschool</h2>
                        <h3 className='text-sm mb-5 underline'>2013-2017</h3>
                        <h2>STI Southwoods</h2>
                        <h3 className='text-sm mb-5 underline'>2017-2019</h3>
                        <h2>EARIST Cavite</h2>
                        <h3 className='text-sm mb-5 underline'>2019-2024</h3>

                    </div>
                    
                </div>

              )}
              <button className='bg-red-900 p-3 z-50 rounded-xl my-5' onClick={ShowMore}> {Showing?<h1>Less...</h1>:<h1>More...</h1>}</button>
          </motion.div>
            </div>
            
            <div className='relative hidden md:block ml-auto -z-0'>
  <motion.img 
    src={mypic} 
    initial={{x:"100vw", opacity:1}} 
    animate={{x:0, opacity:1}} 
    transition={{duration:1, delay:1}} 
    className='w-full'  
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black bottom-0 h-1/10"></div> 
</div>
        </motion.div>
    );
}

export default Home;
