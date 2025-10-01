import { Button, PageTitle } from "@/components";
import { useRootStore } from "@/store/rootStore";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useCreateExercise } from "../hooks/useExerciseApi";
import type { ExerciseFormData } from "../schema";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./exercises.module.css";

export const ExerciseNewPage = () => {
  const toast = useRootStore((state) => state.toast);
  const query = useQueryClient();

  const { mutate } = useCreateExercise({
    onSuccess: () => {
      query.invalidateQueries({ queryKey: [QUERY_KEY_EXERCISES] });
      toast.add({
        message: "種目を登録しました",
      });
    },
    onError: (error) => {
      toast.add({
        message: `種目の登録に失敗しました: ${error.message}`,
        type: "error",
      });
    },
  });

  const handleSubmit = (data: ExerciseFormData) => {
    mutate(data);
  };

  return (
    <>
      <PageTitle title="種目登録" />
      <div className={styles.indexForm}>
        <div />
        <Button to="/exercises">種目一覧</Button>
      </div>
      <ExerciseForm onSubmit={handleSubmit} defaultValues={{ laterality: "bilateral" }} />
      <div className={styles.formActions}>
        <Button type="button" variant="outlined" to="/exercises">
          キャンセル
        </Button>
        <Button type="submit" form="exercise-form">
          登録
        </Button>
      </div>
    </>
  );
};
