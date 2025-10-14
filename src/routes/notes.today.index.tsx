import { NoteTodayPage } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/today/")({
  component: NoteTodayPage,
});
