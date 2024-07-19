import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="home h-full flex flex-col justify-end lg:flex-row items-center lg:items-end py-4 lg:pb-8 lg:justify-between lg:px-24">
      <section className="flex flex-col justify-center mb-4 lg:mb-0 items-center lg:items-start gap-2 md:gap-4 lg:gap-6 lg:basis-1/2">
        <h3 className="text-sm md:text-lg lg:text-xl text-blue-100 font-thin">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-lg text-white md:text-3xl lg:text-7xl uppercase">
          space
        </h1>
        <p className="text-sm md:text-lg px-4 lg:text-xl sm:px-[180px] md:px-20 lg:pr-32 lg:pl-0 text-blue-100 another-font text-center lg:text-left">
          let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className="flex lg:justify-center lg:items-center lg:basis-1/2">
        <Link to="/destination" className="explore-btn">
          explore
        </Link>
      </div>
    </main>
  );
}
