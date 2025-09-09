import { createFileRoute } from "@tanstack/react-router";
import { ComponentsPage } from "./components/ComponentsPage";

export const Route = createFileRoute("/dev/components")({
  component: DevComponents,
});

function DevComponents() {
  return <ComponentsPage />;
}