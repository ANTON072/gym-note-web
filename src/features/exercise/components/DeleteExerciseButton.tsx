import { useToast } from "@/hooks";
import { useConfirm } from "@/hooks/useConfirm";
import { useIsMutating, useQueryClient } from "@tanstack/react-query";
import { GoTrash } from "react-icons/go";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useDeleteExercise } from "../hooks/useExerciseApi";
import styles from "./Exercises.module.css";

interface Props {
  exerciseId: number;
  onDeleted?: () => void;
  disabled?: boolean;
}

export const DeleteExerciseButton = ({ exerciseId, onDeleted, disabled }: Props) => {
  const query = useQueryClient();
  const toast = useToast();
  const { open, ConfirmDialog } = useConfirm();
  const isMutating = useIsMutating() > 0;

  const deleteMutation = useDeleteExercise({
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
  });

  const handleClick = () => {
    open(
      {
        message: "本当に削除しますか？",
        confirmLabel: "削除",
      },
      () => {
        deleteMutation.mutate(exerciseId);
      },
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={styles.listDeleteButton}
        disabled={isMutating}
      >
        <GoTrash />
      </button>
      <ConfirmDialog />
    </>
  );
};
