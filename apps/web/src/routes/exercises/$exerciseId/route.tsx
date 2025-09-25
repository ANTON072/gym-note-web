import { PageTitle } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises/$exerciseId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { exerciseId } = Route.useParams();

  return (
    <>
      <PageTitle title="種目詳細" />
      <div>種目ID: {exerciseId}</div>
    </>
  );
}