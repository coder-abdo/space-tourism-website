import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/destination")({
  component: Destination,
});

function Destination() {
  return (
    <main className="destination h-full flex flex-col justify-end lg:flex-row items-center lg:items-end py-4 lg:pb-8 lg:justify-between lg:px-24">
      <h1 className="text-white">Hello /destination!</h1>
    </main>
  );
}

