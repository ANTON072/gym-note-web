import { BODY_PARTS } from "@/constants/bodyParts";
import { z } from "zod";

export const exerciseFormSchema = z.object({
  body_part: z.enum(
    [
      BODY_PARTS.LEGS,
      BODY_PARTS.BACK,
      BODY_PARTS.SHOULDERS,
      BODY_PARTS.ARMS,
      BODY_PARTS.CHEST,
      BODY_PARTS.CARDIO,
    ],
    {
      message: "部位を選択してください",
    },
  ),
  name: z.string().min(1, "種目名を入力してください"),
  laterality: z.enum(["bilateral", "unilateral"]),
  memo: z.string().max(1000, "メモは1000文字以内で入力してください").optional(),
});

export const exerciseSchema = exerciseFormSchema.extend({
  id: z.number(),
});

export type ExerciseFormData = z.infer<typeof exerciseFormSchema>;
export type Exercise = z.infer<typeof exerciseSchema>;
