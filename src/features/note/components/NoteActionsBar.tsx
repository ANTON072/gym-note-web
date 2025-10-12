import { Button } from "@/components";
import { useBottomSheet } from "@/components/BottomSheet";
import { InputField, TextField } from "@/components/form";
import { useRef } from "react";
import { GoPlusCircle } from "react-icons/go";
import styles from "./NoteActionsBar.module.css";

export const NoteActionsBar = () => {
  const exerciseNameInputRef = useRef<HTMLInputElement>(null);
  const { onOpen: onOpenBottomSheet, BottomSheet } = useBottomSheet();

  const handleOpenEnd = () => {
    exerciseNameInputRef.current?.focus();
  };

  return (
    <>
      <div className={styles.NoteActionsBar}>
        <Button
          variant="text"
          startIcon={<GoPlusCircle />}
          className={styles.NoteActionsBar__addButton}
          onClick={onOpenBottomSheet}
        >
          種目を追加
        </Button>
        <Button variant="outlined" size="small">
          前回のノート
        </Button>
        <Button variant="outlined" size="small">
          並び変え
        </Button>
      </div>
      <BottomSheet detent="content" onOpenEnd={handleOpenEnd}>
        <form className={styles.NoteActionsBar__form}>
          <h2>種目を追加</h2>
          <InputField label="種目名" name="exercise_name">
            <TextField ref={exerciseNameInputRef} />
          </InputField>
          <Button type="submit" fullWidth className={styles.NoteActionsBar__submitButton}>
            追加
          </Button>
        </form>
      </BottomSheet>
    </>
  );
};
