import { CrewCarousel } from "@/components/crew/crewCarousel";
import { crews } from "@/lib";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/crew")({
  component: CrewPage,
});

function CrewPage() {
  return (
    <main className="crew px-4 min-h-full pt-20 lg:pt-40 pb-4 lg:px-24">
      <h1 className="mb-12 text-white space-x-4 text-base lg:text-3xl md:text-xl uppercase another-font mt-12 lg:mt-0">
        <span className="text-white/35 font-bold">02</span>
        <span>meet your crew</span>
      </h1>
      <CrewCarousel slides={crews} />
    </main>
  );
}
