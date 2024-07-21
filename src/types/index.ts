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

export type { DestinationType, DestinationNameType, CrewType };
