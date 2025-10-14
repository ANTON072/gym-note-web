import { Button } from "@/components";
import { ExerciseFormFields } from "@/features/exercise";
import { useNoteContext } from "../contexts/NoteContext";
import styles from "./NoteFormCommon.module.css";
import { NoteFormTitle } from "./NoteFormTitle";

export const AddExerciseForm = () => {
  const { displayComponentId, setDisplayComponentId } = useNoteContext();

  if (displayComponentId !== "add_exercise") return null;

  return (
    <form
      noValidate
      onSubmit={() => {
        setDisplayComponentId(null);
      }}
      className={styles.NoteFormCommon}
    >
      <div className={styles.NoteFormCommon__fields}>
        <NoteFormTitle title="種目を追加" />
        <ExerciseFormFields hideMemo />
        <div className={styles.NoteFormCommon__2col}>
          <Button fullWidth variant="outlined">
            キャンセル
          </Button>
          <Button type="submit" fullWidth>
            追加
          </Button>
        </div>
      </div>
    </form>
  );
};
