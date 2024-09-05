import React from 'react'
import Earist from '../assets/EARIST.jpg'
import Icon from './IconLoader'
function Education() {
  const educationData = [
    {
      level: 'Elementary School',
      school: 'Beatitudes Technological and Theological College - Carmona',
      year: '2013',
      image: "beatitude.jpg"
    },
    {
      level: 'High School',
      school: 'Carmona National Highschool',
      year: '2017',
      image: "CNHS.png"
    },
    {
      level: 'Senior High School',
      school: 'STI Carmona',
      year: '2019',
      image: "STICarmona.png"
    },
    {
      level: 'College',
      school: 'Earist G Cavite',
      year: '2024',
      image: "EARIST.jpg"
    }
  ];
  return (
    <div className=" bg-black mx-auto shadow-2xl p-8 z-50 " id="Education"
    style={{
      boxShadow: '0 -10px 15px -3px rgba(1, 1, 1, 10)', // Custom top shadow
    }}>
      <h1 className="text-4xl font-bold text-center text-white mb-6">Education</h1>

      <div className="md:flex md:gap-4 mb-9">
        { educationData.map((Educ, index) => (
          <div className="bg-white shadow-md rounded-lg p-6 md:flex-1 mb-9" key={index}>
            <h3 className="text-xl font-semibold">{Educ.level}</h3>
            <p className="text-gray-600">{Educ.school}</p>
            <p className="text-gray-500"> SY Graduated :{Educ.year}</p>

            <Icon filename={Educ.image}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
