import { DestinationType } from "@/types";
import moonImage from "@/assets/destination/image-moon.png";
import marsImage from "@/assets/destination/image-mars.png";
import europaImage from "@/assets/destination/image-europa.png";
import titanImage from "@/assets/destination/image-titan.png";
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
export { destinations };
