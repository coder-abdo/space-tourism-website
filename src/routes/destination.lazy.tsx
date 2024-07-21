import { createLazyFileRoute } from "@tanstack/react-router";
import { useHandleDestination } from "@/hooks/useHandleDestination";
import { DestinationButtonsGroup } from "@/components/destinations/destinationsButtonsGroup";
import { DestinationsDescription } from "@/components/destinations/destinationsDescription";
import { DestinationsTrip } from "@/components/destinations/destinationsTrip";
import { DestinationsImg } from "@/components/destinations/destinationsImg";

export const Route = createLazyFileRoute("/destination")({
  component: Destination,
});

function Destination() {
  const { destination, destinations, handleClick, handleTab } =
    useHandleDestination();

  return (
    <main className="destination min-h-full pt-20 lg:pt-40 pb-4 lg:px-24">
      <h1 className="mb-12 text-white space-x-4 text-base lg:text-3xl md:text-xl uppercase another-font">
        <span className="text-white/35 font-bold">01</span>
        <span>pick your destination</span>
      </h1>
      <section className="flex flex-col lg:flex-row lg:items-center">
        <DestinationsImg destination={destination} handleTab={handleTab} />
        <div className="flex flex-col items-center px-4 text-white lg:basis-1/2">
          <DestinationButtonsGroup
            destinations={destinations}
            handleClick={handleClick}
            destination={destination}
          />
          <DestinationsDescription
            destination={destination}
            handleTab={handleTab}
          />
          <DestinationsTrip destination={destination} handleTab={handleTab} />
        </div>
      </section>
    </main>
  );
}
