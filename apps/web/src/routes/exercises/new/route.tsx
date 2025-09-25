import { PageTitle } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageTitle title="種目新規登録" />
      <div>Hello "/exercises/new"!</div>
    </>
  );
}
