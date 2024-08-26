import React, { useState } from 'react';

const ExperienceCard = ({ title, experiences }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" max-w-sm mx-auto  bg-white shadow-lg rounded-lg p-6 my-4" id="Experience">
      {/* Title Section */}
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none"
      >
        {isOpen ? 'See Less...' : 'See More...'}
      </button>

      {/* Experience List (shown only when isOpen is true) */}
      {isOpen && (
        <div className="mt-4 space-y-3">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-gray-700">{experience.name}</h4>
              <p className="text-gray-600">{experience.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
