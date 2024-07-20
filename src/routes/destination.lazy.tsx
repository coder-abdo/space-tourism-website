import { useState } from "react";

import { animate, stagger } from "framer-motion";

import { destinations } from "@/lib";
import { DestinationNameType } from "@/types";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/destination")({
  component: Destination,
});

function Destination() {
  const [destination, setDestination] = useState<DestinationNameType>("moon");

  const handleClick = (name: DestinationNameType) => {
    setDestination(name);
    animate("img", { opacity: [0, 1], y: [100, 0] }, { duration: 0.5 });
    animate(
      "div.animated-div",
      { opacity: [0, 1], x: [100, 0] },
      { delay: stagger(0.1) },
    );
  };
  const handleTab = (name: DestinationNameType) => {
    const choosenItem = destinations.findIndex((dest) => dest.name === name);
    return destinations[choosenItem];
  };

  return (
    <main className="destination min-h-full pt-20 lg:pt-40 pb-4 lg:px-24">
      <h1 className="mb-12 text-white space-x-4 text-base lg:text-3xl md:text-xl uppercase another-font">
        <span className="text-white/35 font-bold">01</span>
        <span>pick your destination</span>
      </h1>
      <section className="flex flex-col lg:flex-row lg:items-center">
        <div className="lg:basis-1/2 flex justify-center items-center">
          <img
            src={handleTab(destination).img}
            alt="destination image"
            className="max-w-xs w-full"
          />
        </div>

        <div className="flex flex-col items-center px-4 text-white lg:basis-1/2">
          <div className="flex space-x-4 mb-4">
            {destinations.map((dest) => (
              <button
                className={`text-base transition-colors lg:text-xl uppercase py-4 another-font ${destination === dest.name ? "text-white border-b border-b-white" : "text-blue-100"}`}
                key={dest.name}
                onClick={() => handleClick(dest.name)}
              >
                {dest.name}
              </button>
            ))}
          </div>
          <div className="animated-div flex flex-col items-center lg:px-0">
            <h2 className="text-lg md:text-3xl lg:text-5xl mb-2 uppercase md:mb-4">
              {handleTab(destination).name}
            </h2>
            <p className="border-b-2 border-white/20 text-base text-center lg:text-left md:px-24 lg:px-0 pb-4 md:text-lg lg:text-xl text-blue-100 another-font mb-4">
              {handleTab(destination).description}
            </p>
          </div>
          <div className="animated-div flex justify-between w-full md:px-24 lg:px-0">
            <h3 className="flex flex-col gap-4">
              <span className="text-blue-100 another-font">AVG. DISTANCE</span>
              <span className="text-2xl text-white font-bold">
                {handleTab(destination).distance}
              </span>
            </h3>
            <h3 className="flex flex-col gap-4">
              <span className="text-blue-100 another-font">
                Est. travel time
              </span>
              <span className="text-white text-2xl font-bold">
                {handleTab(destination).time}
              </span>
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
