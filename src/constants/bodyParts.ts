export const BODY_PART_OPTIONS = [
  { value: "legs", label: "脚" },
  { value: "back", label: "背中" },
  { value: "shoulders", label: "肩" },
  { value: "arms", label: "腕" },
  { value: "chest", label: "胸" },
  { value: "cardio", label: "有酸素" },
] as const;

export type BodyPart = (typeof BODY_PART_OPTIONS)[number]["value"];
