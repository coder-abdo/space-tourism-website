import { DestinationNameType, DestinationType } from "@/types";

type Props = {
  destination: DestinationNameType;
  handleTab: (dest: DestinationNameType) => DestinationType;
};
export const DestinationsDescription = ({ handleTab, destination }: Props) => {
  return (
    <div className="animated-div flex flex-col items-center lg:px-0">
      <h2 className="text-lg md:text-3xl lg:text-5xl mb-2 uppercase md:mb-4">
        {handleTab(destination).name}
      </h2>
      <p className="border-b-2 border-white/20 text-base text-center lg:text-left md:px-24 lg:px-0 pb-4 md:text-lg lg:text-xl text-blue-100 another-font mb-4">
        {handleTab(destination).description}
      </p>
    </div>
  );
};
