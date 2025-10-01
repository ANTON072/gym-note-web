import { formatZodErrors } from "@/lib/validation";
import type { FormState } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useCreateExercise } from "../hooks/useExerciseApi";
import { exerciseFormSchema } from "../schema";

export const createExerciseAction = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const rawData = {
    body_part: formData.get("body_part") as string,
    name: formData.get("name") as string,
    laterality: formData.get("laterality") as string,
    memo: formData.get("memo") as string,
  };

  const result = exerciseFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "入力内容を確認してください",
      errors: formatZodErrors(result.error),
    };
  }

  console.log("Validated exercise data:", result.data);

  try {
    const response = await httpAuth.post<{ exercise: Exercise }>("/exercises", result.data);
    console.log("新規エクササイズデータ:", response);
  } catch (error) {
    return {
      success: false,
      message: "登録に失敗しました",
    };
  }

  return {
    success: true,
    message: "エクササイズが正常に登録されました",
  };
};
