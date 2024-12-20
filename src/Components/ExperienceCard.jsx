import React, { useState, useEffect } from 'react'; 
import Icon from "./IconLoader"
const images = import.meta.glob('/src/assets/Icons/*.{png,jpg,svg}');
const ExperienceCard = ({ title, experiences ,image}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };
  const [imageElements, setImageElements] = useState([]);

  useEffect(() => {
      const loadImages = async () => {
          const loadedImages = await Promise.all(
              Object.keys(images).map(async (path) => {
                  const src = await images[path]();
                  return { name: path.split('/').pop(), src };
              })
          );
          setImageElements(loadedImages);
      };

      loadImages();
  }, [])
  return (
    <div className=" max-w-sm mx-auto  bg-slate-900 shadow-lg rounded-lg p-6 my-4" id="Experience">
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
              <Icon filename={image}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 

export default ExperienceCard;
