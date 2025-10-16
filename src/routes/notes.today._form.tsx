import { NoteTitle } from "@/features/note";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/today/_form")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <NoteTitle title="本日のノート" status="active" />
      <Outlet />
    </div>
  );
}
