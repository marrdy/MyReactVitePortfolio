import React from 'react';

const Skillset = ({ title, rate }) => {
  const barstyle = 'bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105';
  const barstat = `${barstyle} ${rate}`;

  return (
    <div className='text-gray-700 font-bold rounded-xl bg-white p-11'>
      <div className="flex items-center">
        <label htmlFor="htmlandcss" className="w-2/12">
          {title}
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div className={barstat}></div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
