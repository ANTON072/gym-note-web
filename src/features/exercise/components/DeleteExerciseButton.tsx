import { useStoreApi, useToast } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { GoTrash } from "react-icons/go";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useDeleteExercise } from "../hooks/useExerciseApi";
import styles from "./exercises.module.css";

interface Props {
  exerciseId: number;
  onDeleted?: () => void;
  disabled?: boolean;
}

export const DeleteExerciseButton = ({ exerciseId, onDeleted, disabled }: Props) => {
  const query = useQueryClient();
  const toast = useToast();
  const storeApi = useStoreApi();

  const deleteMutation = useDeleteExercise({
    onMutate: () => {
      storeApi.setIsAnyLoading(true);
    },
    onSuccess: () => {
      query.invalidateQueries({ queryKey: [QUERY_KEY_EXERCISES] });
      toast.add({ message: "種目を削除しました" });
      onDeleted?.();
    },
    onError: (error: Error) => {
      toast.add({
        message: `種目の削除に失敗しました: ${error.message}`,
        type: "error",
      });
    },
    onSettled: () => {
      storeApi.setIsAnyLoading(false);
    },
  });

  const handleClick = (id: number) => {
    window.confirm("本当に削除しますか？") && deleteMutation.mutate(id);
  };

  return (
    <button
      type="button"
      onClick={() => handleClick(exerciseId)}
      className={styles.listDeleteButton}
      disabled={deleteMutation.isPending || disabled}
    >
      <GoTrash />
    </button>
  );
};
