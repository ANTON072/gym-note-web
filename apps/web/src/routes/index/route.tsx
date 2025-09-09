import { createFileRoute } from "@tanstack/react-router";
import { WelcomeSection } from "./components/WelcomeSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <WelcomeSection />
    </div>
  );
}