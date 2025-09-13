import { createFileRoute } from "@tanstack/react-router";

import { LoginForm } from "@/components";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <LoginForm />;
}
