import React, { useRef, useState, useEffect } from "react";
import classes from "./Skill.module.css";

interface Props {
  images: string[];
}

const HorizontalScrollableComponent: React.FC<Props> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null
  );
  const [leftmostImageIndex, setLeftmostImageIndex] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      let minDistance = Infinity;
      let leftmostIndex = 0;

      for (let i = 0; i < container!.children[0].children.length; i++) {
        const image = container!.children[0].children[i] as HTMLImageElement;
        const distance = Math.abs(image.offsetLeft - container!.scrollLeft);

        if (distance < minDistance) {
          minDistance = distance;
          leftmostIndex = i;
        }
      }

      setLeftmostImageIndex(leftmostIndex);
    };

    container!.addEventListener("scroll", handleScroll);
    return () => container!.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - containerRef.current.offsetWidth / 1.6,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + containerRef.current.offsetWidth / 1.6,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className={classes.skillScroll} ref={containerRef}>
        <div className={classes.content}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`${classes.skillImg} ${
                leftmostImageIndex === index ? classes.enlarged : ""
                
              }`}
              onMouseEnter={() => setHoveredImageIndex(index)}
              onMouseLeave={() => setHoveredImageIndex(null)}
            />
          ))}
        </div>
        <div >
        <button onClick={scrollLeft} className={classes.leftArrow}>&lt;</button>
        <button onClick={scrollRight} className={classes.rightArrow}>&gt;</button>
      </div>
      </div>
  
    </div>
  );
};

export default HorizontalScrollableComponent;
