import React from 'react'  
import Card from './ExperienceCard'

function Experience() {
  const experienceData = [
    {
        title: 'C#',
        experiences: [
            { name: 'Unity', details: '5 projects' },
            { name: '.NET', details: '3 projects' },
            { name: 'Xamarin', details: '1 project' },
            { name: 'ASP.NET', details: '1 project' },
            { name: 'WPF', details: '3 projects' },
        ],
    },
    {
        title: 'GDScript',
        experiences: [
            { name: 'Godot Engine', details: '4 projects' },
        ],
    },
    {
        title: 'JavaScript',
        experiences: [
            { name: 'React (Native)', details: '2 projects' },
            { name: 'React (Vite)', details: '1 project' },
        ],
    },
    {
        title: 'Visual Basic',
        experiences: [
            { name: '.NET', details: '1 project' },
        ],
    },
    {
        title: 'Other Languages',
        experiences: [
            { name: 'Python' },
            { name: 'Flutter' },
            { name: 'Java' },
        ],
    },
    {
        title: 'Software Expertise',
        experiences: [
            { name: 'Visual Studio Code', details: 'Code editor' },
            { name: 'GIMP', details: 'Image manipulation software' },
            { name: 'LibreSprite', details: 'Pixel art editor' },
            { name: 'Visual Studio', details: 'Integrated development environment (IDE)' },
            { name: 'JCreator', details: 'Java IDE' },
            { name: 'Eclipse', details: 'IDE for Java and other programming languages' },
            { name: 'Unity', details: 'Game engine' },
            { name: 'Godot', details: 'Game engine' },
            { name: 'Excel', details: 'Spreadsheet software' },
            { name: 'MySQL', details: 'Relational database management system' },
            { name: 'MSSQL', details: 'Microsoft SQL Server, a relational database management system' },
        ],
    },
];

  return (
    <div className='bg-black'>
        <h1 className="text-4xl font-bold text-center text-white mb-6">Experience</h1>
        <h2 className="text-xl font-light text-center text-red-500 mb-6">Note: this is not work experience. this is the languages and platforms I used to make my independent projects and projects that i made for others.</h2>
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
