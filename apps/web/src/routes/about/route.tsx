import { createFileRoute } from "@tanstack/react-router";
import { AboutContent } from "./components/AboutContent";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <AboutContent />
    </div>
  );
}