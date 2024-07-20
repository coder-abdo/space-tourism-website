import { createLazyFileRoute } from "@tanstack/react-router";
import moonImage from "@/assets/destination/image-moon.png";
import marsImage from "@/assets/destination/image-mars.png";
import europaImage from "@/assets/destination/image-europa.png";
import titanImage from "@/assets/destination/image-titan.png";
import { useState } from "react";

export const Route = createLazyFileRoute("/destination")({
  component: Destination,
});
type DestinationType = {
  name: "moon" | "mars" | "europa" | "titan";
  img: string;
  description: string;
  distance: string;
  time: string;
};
const destinations: DestinationType[] = [
  {
    name: "moon",
    img: moonImage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 days",
  },
  {
    name: "mars",
    img: marsImage,
    description:
      "Don’t forget to pack your hiking bag. You’ll need them to tackle Olympus Mons in style.",
    distance: "225 MIL. KM",
    time: "9 months",
  },
  {
    name: "europa",
    img: europaImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. While the planet isly mostly composed of_WATER, the surface is extremely cold.",
    distance: "628 MIL. KM",
    time: "3 years",
  },
  {
    name: "titan",
    img: titanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 years",
  },
];
function Destination() {
  const [destination, setDestination] = useState<
    "moon" | "mars" | "europa" | "titan"
  >("moon");
  const handleClick = (name: "moon" | "mars" | "europa" | "titan") => {
    setDestination(name);
  };
  const handleTab = (name: "moon" | "mars" | "europa" | "titan") => {
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
                className={`text-base lg:text-xl uppercase py-4 another-font ${destination === dest.name ? "text-white border-b border-b-white" : "text-blue-100"}`}
                key={dest.name}
                onClick={() => handleClick(dest.name)}
              >
                {dest.name}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center lg:px-0">
            <h2 className="text-lg md:text-3xl lg:text-5xl mb-2 uppercase md:mb-4">
              {handleTab(destination).name}
            </h2>
            <p className="border-b-2 border-white/20 text-base text-center lg:text-left md:px-24 lg:px-0 pb-4 md:text-lg lg:text-xl text-blue-100 another-font mb-4">
              {handleTab(destination).description}
            </p>
          </div>
          <div className="flex justify-between w-full md:px-24 lg:px-0">
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
