import React from 'react'  
import Card from './ExperienceCard'

function Experience() {
    const experienceData = [
        {
          title: 'C# - Base Language',
          experiences: [
            { name: 'Unity', details: '5 projects' },
            { name: '.NET', details: '3 projects' },
          ],
        },
        {
            title: 'GDScript - Base Language',
            experiences: [
            { name: 'Godot Engine', details: '4 projects' },
            ],
        },
        {
          title: 'JavaScript - Base Language',
          experiences: [
            { name: 'React', details: '4 projects' },
            { name: 'Node.js', details: '2 projects' },
            { name: 'Vue.js', details: '3 projects' },
          ],
        },
        {
          title: 'Python - Base Language',
          experiences: [
            { name: 'Django', details: '3 projects' },
            { name: 'Flask', details: '2 projects' },
            { name: 'Machine Learning', details: '4 projects' },
          ],
        },
        {
          title: 'Python - Base Language',
          experiences: [
            { name: 'Django', details: '3 projects' },
            { name: 'Flask', details: '2 projects' },
            { name: 'Machine Learning', details: '4 projects' },
          ],
        },        {
          title: 'Python - Base Language',
          experiences: [
            { name: 'Django', details: '3 projects' },
            { name: 'Flask', details: '2 projects' },
            { name: 'Machine Learning', details: '4 projects' },
          ],
        },
      ];
  return (
    <div className='bg-black'>
        <h1 className="text-4xl font-bold text-center text-white mb-6">Experience</h1>
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">Note: this is not work experience. this is the languages and platforms I used to make my independent projects and projects that i made for others.</h2>
        <div className='flex flex-wrap justify-center'>
            {experienceData.map((item, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <Card title={item.title} experiences={item.experiences} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
