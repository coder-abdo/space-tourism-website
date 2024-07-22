type DestinationNameType = "moon" | "mars" | "europa" | "titan";
type DestinationType = {
  name: DestinationNameType;
  img: string;
  description: string;
  distance: string;
  time: string;
};

type CrewType = {
  name: string;
  role: string;
  bio: string;
  img: string;
};

type TechType = {
  title: string;
  subtitle: string;
  img: {
    landscape: string;
    portrait: string;
  };
  description: string;
};

export type { DestinationType, DestinationNameType, CrewType, TechType };
