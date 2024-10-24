import React, { useState, useRef, useLayoutEffect } from "react";
import ImageLoader from "./ImageViewerButton";
import ImageSlider from "./ImageSlider";

function Gallery() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // Keep track of which image to show
  const sliderRef = useRef(null); // Create a ref for ImageSlider

  const imagesList = [
    { title: "Profriends Job Order VB.NET", url: "ProfriendsMotorPoolJobOrders.jpg" },
    { title: "Thesis Book bind title: Ballgorithm.", url: "thesisSoftBindDone.jpg" },
    { title: "Ballgorithm.", url: "BallgorithmMainMenu.jpg" },
    // Add more images as needed
  ];

  const handleClick = (title, index) => {
    setSelectedIndex(index); // Save the index to show
    setShowCarousel(true); // Show the carousel
  };

  // Use useLayoutEffect to ensure the component is mounted before calling goToSlide
  useLayoutEffect(() => {
    if (showCarousel && sliderRef.current && selectedIndex !== null) {
      sliderRef.current.goToSlide(selectedIndex); // Ensure that goToSlide is called after the DOM is fully rendered
    }
  }, [showCarousel, selectedIndex]); // Run when showCarousel or selectedIndex changes

  return (
    <div className="bg-black p-10">
      <h1 className="text-4xl font-bold text-center text-white m-7">Gallery</h1>
      <div className="bg-slate-900 border-b-gray-50 mx-10 rounded-lg">
        <div className="h-auto w-full overflow-auto p-7 flex flex-wrap justify-center gap-6">
          {imagesList.map((image, index) => (
            <ImageLoader
              index={index}
              key={index}
              filename={image.url}
              titleImage={image.title}
              OnclickImage={() => handleClick(image.title, index)} // Pass the index to handleClick
            />
          ))}
        </div>
      </div>

      {showCarousel && (
        <ImageSlider slides={imagesList} ref={sliderRef} close={() => setShowCarousel(false)} />
      )}
    </div>
  );
}

export default Gallery;
