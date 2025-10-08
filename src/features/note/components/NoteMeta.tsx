import { Button } from "@/components";
import { useBottomSheet } from "@/components/BottomSheet";
import { InputField, TextField } from "@/components/form";
import { GoPencil } from "react-icons/go";
import styles from "./NoteMeta.module.css";

export const NoteMeta = () => {
  const { onOpen: onOpenBottomSheet, BottomSheet } = useBottomSheet();

  return (
    <>
      <div className={styles.NoteMeta}>
        <button
          type="button"
          className={styles.NoteMeta__editButtonArea}
          onClick={onOpenBottomSheet}
        >
          <GoPencil className={styles.NoteMeta__editIcon} />
        </button>
        <div>2025年10月6日（月）</div>
        <div>開始: 12:00</div>
        <div />
        <div className={styles.NoteMeta__place}>場所: クラブオーサム西国分寺</div>
      </div>
      <BottomSheet detent="content">
        <form className={styles.NoteMeta__form}>
          <h2>時間・場所</h2>
          <InputField label="日にち" name="date">
            <TextField />
          </InputField>
          <InputField label="開始時刻" name="start_time">
            <TextField />
          </InputField>
          <InputField label="終了時刻" name="end_time">
            <TextField />
          </InputField>
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
        </form>
      </BottomSheet>
    </>
  );
};
