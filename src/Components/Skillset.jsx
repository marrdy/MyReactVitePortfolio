import React from 'react';

const Skillset = ({ title, rate, description,opinion,proficiencyLevel }) => {
  const barstyle = 'bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105';
  const barstat = `${barstyle} ${rate}`;
  const getTextColor = (level) => {
    switch (level) {
      case "Good":
        return "text-green-500";
      case "Moderate":
        return "text-orange-500";
      case "Room for Improvement":
        return "text-red-500";
      default:
        return "text-gray-700"; // Default color if no match
    }
  };
  return (
    <div className='mx-10 text-white font-bold rounded-xl bg-slate-900 p-11'>
      <div className="flex-col items-center space-y-9">
        <label htmlFor="htmlandcss" className="w-2/12 text-2xl ">
          {title} - <span className={`w-2/12 text-2xl ${getTextColor(proficiencyLevel)}`}>{proficiencyLevel}</span>
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div className={barstat}></div>
        </div>
        <p>{description}</p>
        <p>{opinion}</p>
      </div>
    </div>
  );
};

export default Skillset;
