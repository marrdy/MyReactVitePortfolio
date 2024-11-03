import { useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

// Forward the ref from the parent to this child component
const ImageSlider = forwardRef(({ slides, close }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use `useImperativeHandle` to expose the `goToSlide` method to the parent
  useImperativeHandle(ref, () => ({
    goToSlide(slideIndex) {
      setCurrentIndex(slideIndex);
    },
  }));

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 z-50">
      <button className="absolute top-0 left-0 m-4 bg-white p-2 rounded" onClick={close}>
        Close
      </button>
      <div>
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white text-4xl z-10 cursor-pointer"
        >
          ❰
        </div>
        <div
          onClick={goToNext}
          className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white text-4xl z-10 cursor-pointer"
        >
          ❱
        </div>
      </div>
      <motion.div
        className="p-52 items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <img src={`src/GalleryImages/${slides[currentIndex].url}`} className="max-w-2xl" alt={slides[currentIndex].title} />
        <div className="flex justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              className={`mx-1 cursor-pointer text-2xl ${
                currentIndex === slideIndex ? "text-blue-500" : "text-gray-500"
              }`}
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
});

export default ImageSlider;
