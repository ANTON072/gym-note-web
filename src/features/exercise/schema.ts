import { BODY_PART_OPTIONS } from "@/constants/bodyParts";
import { z } from "zod";

export const exerciseFormSchema = z.object({
  name: z.string().min(1, "種目名を入力してください"),
  body_part: z
    .enum(BODY_PART_OPTIONS.map((option) => option.value) as [string, ...string[]], {
      message: "部位を選択してください",
    })
    .optional(),
  laterality: z.enum(["bilateral", "unilateral"]),
  memo: z.string().max(1000, "メモは1000文字以内で入力してください").optional(),
});

export const exerciseSchema = exerciseFormSchema.extend({
  id: z.number(),
});

export type ExerciseFormData = z.infer<typeof exerciseFormSchema>;
export type Exercise = z.infer<typeof exerciseSchema>;
