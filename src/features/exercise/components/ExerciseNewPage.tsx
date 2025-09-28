import { Button, PageTitle } from "@/components";
import { useActionState } from "react";
import { createExerciseAction } from "../lib/createExerciseAction";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./exercises.module.css";

export const ExerciseNewPage = () => {
  const [state, formAction, isPending] = useActionState(createExerciseAction, {
    success: false,
    message: "",
  });

  return (
    <>
      <PageTitle title="種目登録" />
      <div className={styles.indexForm}>
        <div />
        <Button to="/exercises">種目一覧</Button>
      </div>
      <form action={formAction} noValidate>
        <ExerciseForm state={state} defaultValues={{ laterality: "bilateral" }} />
        <div className={styles.formActions}>
          <Button type="button" variant="outlined" to="/exercises">
            キャンセル
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "登録中..." : "登録"}
          </Button>
        </div>
      </form>
    </>
  );
};
