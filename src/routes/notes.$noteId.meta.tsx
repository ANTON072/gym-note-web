import { NoteMetaPage } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/$noteId/meta")({
  component: NoteMetaPage,
});
