import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./slideshow.css";

interface SlideshowProps {
  images: string[];
}

const slideVariants = {
  enter: {
    x: '100%',
  },
  center: {
    x: 0,
  },
  exit: {
    x: '-100%',
  },
};

function Slideshow({ images }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="slideshow">
      <AnimatePresence initial={false} custom={currentSlide}>
        {images.map((url, index) => (
          <motion.img
            key={index}
            src={url}
            alt={`Slide ${index}`}
            className={index === currentSlide ? 'active' : ''}
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            custom={currentSlide}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>

    </div>
  );
}

export default Slideshow;
