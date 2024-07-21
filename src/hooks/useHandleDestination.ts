import { useState } from "react";

import { animate, stagger } from "framer-motion";

import { destinations } from "@/lib";
import { DestinationNameType } from "@/types";

export function useHandleDestination() {
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
  return { destination, handleClick, handleTab, destinations };
}
