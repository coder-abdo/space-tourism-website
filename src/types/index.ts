type DestinationNameType = "moon" | "mars" | "europa" | "titan";
type DestinationType = {
  name: DestinationNameType;
  img: string;
  description: string;
  distance: string;
  time: string;
};

export type { DestinationType, DestinationNameType };
