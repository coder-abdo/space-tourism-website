import type { DestinationNameType, DestinationType } from "@/types";

type Props = {
  destinations: DestinationType[];
  destination: DestinationNameType;
  handleClick: (dest: DestinationNameType) => void;
};

export const DestinationButtonsGroup = ({
  destinations,
  handleClick,
  destination,
}: Props) => {
  return (
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
  );
};
