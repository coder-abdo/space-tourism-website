import { CrewType } from "@/types";
import { animate, stagger } from "framer-motion";
import React, { useState } from "react";

interface SlideshowProps {
  slides: CrewType[];
}

export const CrewCarousel: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    animate("img", { opacity: [0, 1], x: [-200, 0] }, { duration: 0.2 });
    animate(
      ".carousel-info",
      { opacity: [0, 1], x: [200, 0] },
      { delay: stagger(0.2) },
    );
  };

  return (
    <section className="flex h-full flex-col lg:flex-row lg:items-center px-4 py-4">
      <div className="carousel-info flex flex-col justify-center lg:justify-between">
        <div className="flex flex-col gap-2 md:gap-6 text-center lg:text-left lg:gap-2">
          <h3 className="text-sm text-gray-400 uppercase md:text-lg lg:text-xl">
            {slides[currentIndex].role}
          </h3>
          <h1 className="text-lg md:text-2xl lg:text-5xl text-white">
            {slides[currentIndex].name}
          </h1>
          <p className="text-sm md:text-lg text-blue-100 another-font lg:pr-32 md:px-18 lg:pl-0">
            {slides[currentIndex].bio}
          </p>
        </div>
        <div className="flex justify-center space-x-2 lg:mt-24 md:mt-6 mt-3 lg:justify-start">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center lg:justify-start lg:items-start pb-4 pt-8 lg:py-0">
        <img
          className="w-full h-auto md:max-w-sm"
          src={slides[currentIndex].img}
          alt={slides[currentIndex].name}
        />
      </div>
    </section>
  );
};
