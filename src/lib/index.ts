import { CrewType, DestinationType } from "@/types";
// destination images
import moonImage from "@/assets/destination/image-moon.png";
import marsImage from "@/assets/destination/image-mars.png";
import europaImage from "@/assets/destination/image-europa.png";
import titanImage from "@/assets/destination/image-titan.png";
// crew images
import Douglas from "@/assets/crew/image-douglas-hurley.png";
import Mark from "@/assets/crew/image-mark-shuttleworth.png";
import Victor from "@/assets/crew/image-victor-glover.png";
import Anousheh from "@/assets/crew/image-anousheh-ansari.png";

const crews: CrewType[] = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: Douglas,
  },
  {
    role: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: Mark,
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: Victor,
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: Anousheh,
  },
];
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
export { destinations, crews };
