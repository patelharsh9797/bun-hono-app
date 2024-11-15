import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: About,
});

function About() {
  return (
    <div className="">
      <h1>About Page</h1>
    </div>
  );
}
