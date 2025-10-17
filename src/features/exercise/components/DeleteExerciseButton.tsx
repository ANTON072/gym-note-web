import { useConfirm } from "@/hooks/useConfirm";
import { useIsMutating, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useDeleteExercise } from "../hooks/useExerciseApi";
import styles from "./Exercises.module.css";

interface Props {
  exerciseId: number;
  onDeleted?: () => void;
}

export const DeleteExerciseButton = ({ exerciseId, onDeleted }: Props) => {
  const query = useQueryClient();
  const { open, ConfirmDialog } = useConfirm();
  const isMutating = useIsMutating() > 0;

  const deleteMutation = useDeleteExercise({
    onSuccess: () => {
      query.invalidateQueries({ queryKey: [QUERY_KEY_EXERCISES] });
      toast.success("種目を削除しました");
      onDeleted?.();
    },
    onError: (error: Error) => {
      toast.error(`種目の削除に失敗しました: ${error.message}`);
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
        className={styles.Exercises__listDeleteButton}
        disabled={isMutating}
      >
        <Trash2 className="h-4 w-4" />
      </button>
      <ConfirmDialog />
    </>
  );
};
