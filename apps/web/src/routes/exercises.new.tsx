import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/exercises/new"!</div>;
}
