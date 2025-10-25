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
  started_time: z.string().optional(),
  ended_time: z.string().optional(),
  place: z.string().optional(),
  memo: z.string().max(1000, "メモは1000文字以内で入力してください").optional(),
  exercises: z.array(noteExerciseSchema),
});

export const noteResponseSchema = noteFormSchema.extend({
  id: z.number(),
  created_at: z.string(),
});
