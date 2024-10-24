import React from 'react'
import SkillRate from './Skillset'
import IconLoader from './IconLoader';
export default function Skills() {
  const Exps = {
    "csharp.png": { name: "C#" },
    "godot.png": { name: "Godot" },
    "jscript.png": { name: "JScript" },
    "react.svg": { name: "React" },
    "java.png": { name: "java" },
    "Mssql.svg": { name: "MS sql" },
    "mysql.png": { name: "Mysql" },
    "PHP.png": { name: "PHP" },
    "Xamarin.png": { name: "Xamarin" },
    "unity.png": { name: "Unity" },
    "vb.png": { name: "Visual basic .NET" },
  };

  const skillsInfo = [
    {
      title: "GUI designing",
      rate: "w-1/3", // 33%
      proficiencyLevel: "Room for Improvement",
      description: "Graphical User Interface (GUI) Designing involves creating visually appealing and user-friendly interfaces for software applications. This process focuses on ensuring that users can interact with the software easily and efficiently through buttons, icons, and other visual elements. It requires a strong understanding of design principles, user experience (UX), and the ability to work with design tools.",
      opinion: "My skills in GUI design are developing. I have a solid understanding of the basics and am comfortable creating user-friendly interfaces, though there is room for improvement."
    },
    {
      title: "Test-Driven Development",
      rate: "w-8/12", // 67%
      proficiencyLevel: "Good",
      description: "Test-Driven Development is a software development approach where tests are written before the actual code. The process involves writing small test cases for every feature, running the tests, and then writing the minimum amount of code necessary to pass those tests. This practice ensures high code quality, reduces bugs, and encourages clean, maintainable code.",
      opinion: "I am quite proficient in Test-Driven Development. I frequently employ TDD in my projects and find it effective in maintaining high code quality."
    },
    {
      title: "Data Managing",
      rate: "w-4/12", // 33%
      proficiencyLevel: "Room for Improvement",
      description: "Data Managing involves organizing, storing, and maintaining data in a way that ensures its accuracy, accessibility, and security. It includes tasks such as data entry, database management, data analysis, and data migration. Effective data management is crucial for making informed business decisions and maintaining data integrity.",
      opinion: "My data management skills are fundamental. I can handle basic tasks and ensure data integrity, but I am still working on improving my proficiency in more advanced data management techniques."
    },
    {
      title: "Version Control",
      rate: "w-1/2", // 50%
      proficiencyLevel: "Moderate",
      description: "Version Control is a system that records changes to a file or set of files over time, so you can recall specific versions later. It is crucial in software development for managing changes in code, tracking history, collaborating with others, and ensuring that work is not overwritten. Popular tools include Git, SVN, and Mercurial.",
      opinion: "I am comfortable with version control systems and use them regularly in my projects. I can manage code changes and collaborate with others effectively, though I continue to learn advanced features."
    },
    {
      title: "Back-End Programming",
      rate: "w-3/4", // 75%
      proficiencyLevel: "Good",
      description: "Back-End Programming refers to the server-side development that involves working on the logic, database, and server configuration that power the front-end interface. Back-end developers write code that ensures that the application, database, and server communicate properly. This role typically involves working with languages like Python, Java, Ruby, and frameworks such as Node.js, Django, or Spring.",
      opinion: "I am highly skilled in back-end programming. I have extensive experience working with various languages and frameworks, making me confident in building robust and scalable server-side applications."
    },
    {
      title: "Agile Methodologies",
      rate: "w-5/12", // 42%
      proficiencyLevel: "Moderate",
      description: "Agile Methodologies are approaches to software development that emphasize flexibility, collaboration, and customer feedback. Agile promotes iterative development, where requirements and solutions evolve through collaboration between cross-functional teams. Common Agile practices include Scrum, Kanban, and Extreme Programming (XP).",
      opinion: "I have a good understanding of Agile methodologies and have applied them in several projects. However, I am still working on mastering these practices to improve team collaboration and project outcomes."
    },
    {
      title: "Object-Oriented Programming",
      rate: "w-3/4", // 75%
      proficiencyLevel: "Good",
      description: "Object-Oriented Programming is a programming paradigm based on the concept of 'objects,' which can contain data and code. OOP languages like Java, C++, and Python enable developers to create modular, reusable code. The four key principles of OOP are encapsulation, inheritance, polymorphism, and abstraction. OOP is widely used for building complex, scalable software systems.",
      opinion: "I am highly proficient in Object-Oriented Programming. I consistently apply OOP principles in my work, which allows me to write modular, maintainable, and scalable code."
    }
  ];

  return (
    <div className=' bg-black flex-col' id="Skills">
      <h1 className="text-4xl font-bold text-center text-white">Skills & knowledge</h1>
      <div className=" py-10">
            <div className="flex flex-wrap justify-center gap-6 ">
                {
                    // Loop through the Exps object using Object.entries()
                    Object.entries(Exps).map(([filename, details], index) => (
                        <div 
                            key={index} 
                            className="w-48 h-60 bg-slate-900 rounded-lg flex flex-col items-center justify-center p-4"
                        >
                            {/* Pass filename to IconLoader */}
                            <IconLoader filename={filename} />
                            <h1 className="text-slate-100 mt-4 text-2xl font-bold">{details.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
        <div  className='space-y-7'>
        {skillsInfo.map((item, index) => (
        <div key={index}>
          <SkillRate title={item.title} rate={item.rate} proficiencyLevel={item.proficiencyLevel} description={item.description} opinion={item.opinion} />
        </div>
      ))}
        </div>

    </div>
  )
}
