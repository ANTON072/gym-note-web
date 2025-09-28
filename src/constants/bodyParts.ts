export const BODY_PARTS = {
  LEGS: "legs",
  BACK: "back",
  SHOULDERS: "shoulders",
  ARMS: "arms",
  CHEST: "chest",
  CARDIO: "cardio",
} as const;

export type BodyPart = (typeof BODY_PARTS)[keyof typeof BODY_PARTS];

export const BODY_PART_LABELS: Record<BodyPart, string> = {
  [BODY_PARTS.LEGS]: "脚",
  [BODY_PARTS.BACK]: "背中",
  [BODY_PARTS.SHOULDERS]: "肩",
  [BODY_PARTS.ARMS]: "腕",
  [BODY_PARTS.CHEST]: "胸",
  [BODY_PARTS.CARDIO]: "有酸素",
};

export const BODY_PART_OPTIONS = Object.entries(BODY_PART_LABELS).map(([value, label]) => ({
  value,
  label,
}));
