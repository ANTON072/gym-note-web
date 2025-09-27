import type { FormState } from "@/types";

export const createExerciseAction = async (
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const bodyPart = formData.get("bodyPart") as string;
  const name = formData.get("name") as string;
  const laterality = formData.get("laterality") as string;
  const memo = formData.get("memo") as string;

  const errors: Record<string, string> = {};

  if (!bodyPart) {
    errors.bodyPart = "部位を選択してください";
  }
  if (!name) {
    errors.name = "種目名を入力してください";
  }
  if (!laterality) {
    errors.laterality = "動作パターンを選択してください";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "入力内容を確認してください",
      errors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("新規エクササイズデータ:", {
    bodyPart,
    name,
    laterality,
    memo,
  });

  return {
    success: true,
    message: "エクササイズが正常に登録されました",
  };
};
