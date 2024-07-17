import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="home">
      <h3>Welcome Home!</h3>
    </div>
  );
}
