import React from 'react'
import Question from './Questions'
export default function QNA() {
  const QuestionsList = [
    {
      ques: "Can you walk me through a recent project you worked on?",
      ans: "Recently, I developed a React web app with a responsive design using Vite and Tailwind CSS. The app featured dynamic content loading, and I implemented animations using Framer Motion for a seamless user experience. I worked on optimizing the performance for mobile devices, ensuring fast load times and a smooth user interface."
    },
    {
      ques: "How do you approach debugging and resolving issues in your code?",
      ans: "I typically start by isolating the problem area through logging or step-by-step debugging. I then test possible solutions, always ensuring to check edge cases. I rely on tools like Chrome DevTools for front-end issues and use proper error handling in back-end code to track down bugs efficiently."
    },
    {
      ques: "How do you prioritize tasks when working on multiple projects?",
      ans: "I use a combination of task management tools like Trello or Jira and clear communication with team members or clients to understand priorities. I break down complex tasks into smaller, actionable steps and focus on the highest-impact features or fixes first to meet deadlines efficiently."
    },
    {
      ques: "What’s a challenging coding problem you’ve solved, and how did you handle it?",
      ans: "In a recent React Native project, I faced performance issues when loading large sets of data. To solve this, I implemented pagination and lazy loading techniques, which significantly improved the app’s responsiveness and user experience. Additionally, I optimized state management to avoid unnecessary re-renders."
    },
    {
      ques: "How do you keep up with the latest technologies and programming trends?",
      ans: "I regularly read documentation, blogs, and follow industry leaders on platforms like GitHub and Twitter. I also take online courses to learn new frameworks and best practices. For instance, I recently completed a course on advanced React and hooks, which helped me streamline my component development process."
    },
    {
      ques: "How do you ensure the scalability of an application you are building?",
      ans: "I focus on writing modular and maintainable code by using design patterns and separating concerns within the app. I also consider database optimization, API rate limiting, and using caching strategies to handle increased loads efficiently. Regular testing and refactoring are key to maintaining scalability."
    },
    {
      ques: "Can you give an example of how you collaborate with a team on a development project?",
      ans: "In one project, I worked closely with designers, product managers, and other developers. We used Git for version control, and I took responsibility for integrating the front-end with the back-end services. We held daily stand-ups to communicate progress, and I made sure to participate in code reviews to ensure quality."
    },
    {
      ques: "What motivates you to succeed in your programming career?",
      ans: "I’m driven by the satisfaction of solving complex problems and creating efficient, user-friendly applications. The continuous learning aspect of programming, where there’s always a new tool or technology to master, keeps me motivated and excited about the field."
    },
    {
      ques: "What tools did you use to create this portfolio?",
      ans: "I built this portfolio using React and Vite as the primary framework for fast development and efficient performance. For animations, I implemented Framer Motion, which allowed me to create smooth and dynamic transitions. Tailwind CSS was used for styling, providing a streamlined approach to responsive and customizable design. Additionally, I incorporated React Icons to easily add visually appealing icons, enhancing the overall user interface and experience. I started making this portfolio since August 21 2024 and officially deplpoyed in github for you to see."
    }
  ];
  return (
    <div className='bg-black p-10' id="Q&A">
      <div>
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Q&A
        </h1>
      </div>
      { QuestionsList.map((qa, index) => (
          <div className="bg-white shadow-md rounded-lg p-6 md:flex-1 mb-9" key={index}>
            <Question ques={qa.ques} Ans={qa.ans}/>
          </div>
        ))}


    </div>
    
  )
}
