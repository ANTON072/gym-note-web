export const NOTE_STATUS = [
  { value: "active", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "archived", label: "Archived" },
] as const;

export type NoteStatus = (typeof NOTE_STATUS)[number]["value"];
