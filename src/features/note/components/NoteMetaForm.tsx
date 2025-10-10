import { Button } from "@/components";
import { InputField, TextField } from "@/components/form";
import { useNoteContext } from "../contexts/NoteContext";
import styles from "./Note.module.css";

export const NoteMetaForm = () => {
  const { displayComponentId, setDisplayComponentId } = useNoteContext();

  if (displayComponentId !== "edit_meta") return null;

  return (
    <form
      onSubmit={() => {
        setDisplayComponentId(null);
      }}
    >
      <div className={styles.NoteFormRows}>
        <div className={styles.NoteFormTitle}>場所・日時</div>
        <InputField label="日にち" name="date">
          <TextField type="date" />
        </InputField>
        <div className={styles.NoteMeta__timeFields}>
          <InputField label="開始時刻" name="start_time">
            <TextField type="time" />
          </InputField>
          <InputField label="終了時刻" name="end_time">
            <TextField type="time" />
          </InputField>
        </div>
        <InputField label="場所" name="place">
          <TextField />
        </InputField>
        <Button
          type="submit"
          fullWidth
          style={{
            marginTop: "1em",
          }}
        >
          更新
        </Button>
      </div>
    </form>
  );
};
