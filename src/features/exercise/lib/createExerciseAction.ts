import { formatZodErrors } from "@/lib/validation";
import type { FormState } from "@/types";
import { exerciseFormSchema } from "../schema";

export const createExerciseAction = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const rawData = {
    bodyPart: formData.get("bodyPart") as string,
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

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("新規エクササイズデータ:", result.data);

  return {
    success: true,
    message: "エクササイズが正常に登録されました",
  };
};
