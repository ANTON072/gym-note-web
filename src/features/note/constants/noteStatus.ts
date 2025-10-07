export const NOTE_STATUS = [
  { value: "active", label: "トレ中" },
  { value: "completed", label: "終了" },
  { value: "archived", label: "アーカイブ" },
] as const;

export type NoteStatus = (typeof NOTE_STATUS)[number]["value"];
