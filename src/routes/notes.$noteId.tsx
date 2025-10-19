import { NoteEditPage } from "@/features/note/pages/NoteEditPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/$noteId")({
  component: NoteEditPage,
});
