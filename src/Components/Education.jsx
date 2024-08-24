import React from 'react'
import Beatitude from '../assets/beatitude.jpg'
import CNHS from '../assets/CNHS.png'
import sti from '../assets/STICarmona.png'
import Earist from '../assets/EARIST.jpg'
function Education() {
  return (
    <div className=" mx-auto p-8" id="Education">
      <h1 className="text-4xl font-bold text-center text-white mb-6">Education</h1>

      <div className="md:flex md:gap-4 mb-9">
        <div className="bg-white shadow-md rounded-lg p-6 md:flex-1 mb-9">
          <h3 className="text-xl font-semibold">Elementary School</h3>
          <p className="text-gray-600">Beatitudes technological and theological college - carmona </p>
          <p className="text-gray-500">2013</p>
          <img src={Beatitude} className=' mx-auto w-80 h-80 md:w-60 md:h-60' />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:flex-1 mb-9">
          <h3 className="text-xl font-semibold">High School</h3>
          <p className="text-gray-600">Carmona National Highschool</p>
          <p className="text-gray-500">2017</p>
          <p className="text-gray-500">2013</p>
          <img src={CNHS} className='mx-auto w-80 h-80 md:w-60 md:h-60' />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:flex-1 mb-9">
          <h3 className="text-xl font-semibold">Senior High School</h3>
          <p className="text-gray-600">STI Carmona</p>
          <p className="text-gray-500">2019</p>
          <p className="text-gray-500">2013</p>
          <img src={sti} className='mx-auto w-80 h-80 md:w-60 md:h-60' />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:flex-1 mb-9">
          <h3 className="text-xl font-semibold">College</h3>
          <p className="text-gray-600">Earist G Cavite</p>
          <p className="text-gray-500">2024</p>
          <p className="text-gray-500">2013</p>
          <img src={Earist} className='mx-auto w-80 h-80 md:w-60 md:h-60' />
        </div>
      </div>
    </div>
  )
}

export default Education
