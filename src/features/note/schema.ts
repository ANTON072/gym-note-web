import { z } from "zod";
import { exerciseSchema } from "../exercise/schema";

export const setListItemSchema = z.object({
  weight: z.number().optional(),
  reps: z.number().optional(),
});

export const noteExerciseSchema = z.object({
  id: exerciseSchema.shape.id,
  set_list: z.array(setListItemSchema),
});

export const noteFormSchema = z.object({
  created_at: z
    .string()
    .refine((date) => !Number.isNaN(Date.parse(date)), { message: "有効な日付を入力してください" }),
  started_time: z.string().optional(),
  ended_time: z.string().optional(),
  place: z.string().optional(),
  memo: z.string().max(1000, "メモは1000文字以内で入力してください").optional(),
  exercises: z.array(noteExerciseSchema),
});
