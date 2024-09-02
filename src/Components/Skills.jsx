import React from 'react'
import SkillRate from './Skillset'
export default function Skills() {
  return (
    <div className='p-32 bg-black flex-col space-y-14' id="Skills">
       <h1 className="text-4xl font-bold text-center text-white mb-6">Skills</h1>
      <SkillRate title='GUI designing' rate ='w-1/3'/>
      <SkillRate title='Test-Driven Developmen' rate ='w-8/12'/>
      <SkillRate title='Data Managing' rate ='w-4/12'/>
      <SkillRate title='Version Contro' rate ='w-1/2'/>
      <SkillRate title='Back End programming' rate ='w-3/4'/>
      <SkillRate title='Agile Methodologies' rate ='w-5/12'/>
      <SkillRate title='Object-Oriented Programming' rate ='w-3/4'/>
    </div>
  )
}
