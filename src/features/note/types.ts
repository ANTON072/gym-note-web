import type { z } from "zod";
import type {
  noteExerciseSchema,
  noteFormSchema,
  noteResponseSchema,
  setListItemSchema,
} from "./schema";

// Zodスキーマから型を生成
export type NoteResponse = z.infer<typeof noteResponseSchema>;
export type NoteForm = z.infer<typeof noteFormSchema>;
export type SetListItem = z.infer<typeof setListItemSchema>;
export type NoteExercise = z.infer<typeof noteExerciseSchema>;
