import { Button } from "@/components";
import { useBottomSheet } from "@/components/BottomSheet";
import { InputField, TextField } from "@/components/form";
import { useRef } from "react";
import { GoPencil } from "react-icons/go";
import styles from "./NoteMeta.module.css";

export const NoteMeta = () => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const { onOpen: onOpenBottomSheet, BottomSheet } = useBottomSheet();

  const handleOpenEnd = () => {
    dateInputRef.current?.focus();
  };

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
      <BottomSheet detent="content" onOpenEnd={handleOpenEnd}>
        <form className={styles.NoteMeta__form}>
          <h2>時間・場所</h2>
          <InputField label="日にち" name="date">
            <TextField ref={dateInputRef} type="date" />
          </InputField>
          <InputField label="開始時刻" name="start_time">
            <TextField type="time" />
          </InputField>
          <InputField label="終了時刻" name="end_time">
            <TextField type="time" />
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
