import { Button } from "@/components";
import { GoPlusCircle } from "react-icons/go";
import { useNoteContext } from "../contexts/NoteContext";
import styles from "./NoteActionsBar.module.css";

export const NoteActionsBar = () => {
  const { setDisplayComponentId } = useNoteContext();

  return (
    <>
      <div className={styles.NoteActionsBar}>
        <Button
          variant="text"
          startIcon={<GoPlusCircle />}
          className={styles.NoteActionsBar__addButton}
          onClick={() => setDisplayComponentId("add_exercise")}
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
    </>
  );
};
