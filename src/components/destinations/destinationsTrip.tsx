import { DestinationNameType, DestinationType } from "@/types";

type Props = {
  destination: DestinationNameType;
  handleTab: (dest: DestinationNameType) => DestinationType;
};

export const DestinationsTrip = ({ destination, handleTab }: Props) => {
  return (
    <div className="animated-div flex justify-between w-full md:px-24 lg:px-0">
      <h3 className="flex flex-col gap-4">
        <span className="text-blue-100 another-font">AVG. DISTANCE</span>
        <span className="text-2xl text-white font-bold">
          {handleTab(destination).distance}
        </span>
      </h3>
      <h3 className="flex flex-col gap-4">
        <span className="text-blue-100 another-font">Est. travel time</span>
        <span className="text-white text-2xl font-bold">
          {handleTab(destination).time}
        </span>
      </h3>
    </div>
  );
};
