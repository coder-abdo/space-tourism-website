import { DestinationNameType, DestinationType } from "@/types";

type Props = {
  destination: DestinationNameType;
  handleTab: (dest: DestinationNameType) => DestinationType;
};

export const DestinationsImg = ({ destination, handleTab }: Props) => {
  return (
    <div className="lg:basis-1/2 flex justify-center items-center">
      <img
        src={handleTab(destination).img}
        alt="destination image"
        className="max-w-xs w-full"
      />
    </div>
  );
};
