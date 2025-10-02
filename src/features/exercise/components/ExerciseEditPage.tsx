import { Button, PageTitle } from "@/components";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./exercises.module.css";
import type { ExerciseFormData } from "../schema";

export const ExerciseEditPage = () => {
  const handleSubmit = (data: ExerciseFormData) => {
    console.log("Update form data:", data);
  };

  return (
    <>
      <PageTitle title="種目更新" />
      <div className={styles.indexForm}>
        <div />
        <Button to="/exercises">種目一覧</Button>
      </div>
      <ExerciseForm onSubmit={handleSubmit} />
      <div className={styles.formActions}>
        <Button type="button" variant="outlined">
          キャンセル
        </Button>
        <Button type="submit" form="exercise-form">更新</Button>
      </div>
    </>
  );
};
