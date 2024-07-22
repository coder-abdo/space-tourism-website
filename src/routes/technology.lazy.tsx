import useMediaQuery from "@/hooks/useMediaQuery";
import { Techs } from "@/lib";
import { createLazyFileRoute } from "@tanstack/react-router";
import { animate } from "framer-motion";
import { useState } from "react";

export const Route = createLazyFileRoute("/technology")({
  component: Technology,
});

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index: number) => {
    setCurrentIndex(index);
    animate("img", { opacity: [0, 1] }, { duration: 0.5 });
    animate(".animation-div", { opacity: [0, 1], y: [200, 0] });
  };
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <main className="tech pl-4 min-h-full pt-20 lg:pt-40 pb-4 lg:pl-24">
      <h1 className="mb-12 text-white text-center lg:text-left space-x-4 text-base lg:text-3xl md:text-xl uppercase another-font mt-12 lg:mt-0">
        <span className="text-white/35 font-bold">03</span>
        <span>space launch 101</span>
      </h1>
      {/* TODO: add techs here */}
      <section className="flex flex-col-reverse lg:flex-row">
        <div className="animation-div flex flex-col items-center lg:pr-4 lg:flex-row lg:basis-1/2">
          <ul className="flex lg:flex-col gap-4 lg:mr-8 lg:mt-0 mt-4">
            {Techs.map((tech, idx) => (
              <li
                onClick={() => handleClick(idx)}
                key={tech.title}
                className={`lg:w-20 lg:h-20 md:w-14 md:h-14 w-10 h-10 cursor-pointer text-white flex justify-center items-center text-sm md:text-lg lg:text-xl rounded-[100%] bg-transparent border border-white/50 ${currentIndex === idx ? "bg-white text-black border-transparent" : ""} `}
              >
                {idx + 1}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 text-center lg:text-left mt-4 lg:mt-0">
            <h2 className="text-sm md:text-lg lg:text-xl text-white/50">
              {Techs[currentIndex].subtitle}
            </h2>
            <h1 className="text-lg md:text-2xl lg:text-5xl lg:mb-4 text-white">
              {Techs[currentIndex].title}
            </h1>
            <p className="text-sm md:text-lg text-blue-100 lg:px-4 px-8">
              {Techs[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="h-full w-full lg:basis-1/2 md:h-[600px]">
          <img
            className="w-full object-fit h-full lg:min-h-80"
            src={
              isDesktop
                ? Techs[currentIndex].img.landscape
                : Techs[currentIndex].img.portrait
            }
            alt={Techs[currentIndex].title}
          />
        </div>
      </section>
    </main>
  );
}
