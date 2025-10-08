import { Button } from "@/components";
import { useBottomSheet } from "@/components/BottomSheet";
import { InputField } from "@/components/form";
import { useRef } from "react";
import DatePicker from "react-datepicker";
import { GoPencil } from "react-icons/go";
import styles from "./NoteMeta.module.css";
import "react-datepicker/dist/react-datepicker.css";

export const NoteMeta = () => {
  const datePickerRef = useRef<DatePicker>(null);
  const startTimePickerRef = useRef<DatePicker>(null);
  const endTimePickerRef = useRef<DatePicker>(null);
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
            <div className={styles.NoteMeta__pickerWrapper}>
              <button
                type="button"
                className={styles.NoteMeta__pickerButton}
                onClick={() => datePickerRef.current?.setOpen(true)}
              >
                2025年10月6日（月）
              </button>
              <DatePicker
                ref={datePickerRef}
                selected={null}
                onChange={() => {}}
                customInput={<span style={{ display: "none" }} />}
              />
            </div>
          </InputField>
          <div className={styles.NoteMeta__timeFields}>
            <InputField label="開始時刻" name="start_time">
              <div className={styles.NoteMeta__pickerWrapper}>
                <button
                  type="button"
                  className={styles.NoteMeta__pickerButton}
                  onClick={() => startTimePickerRef.current?.setOpen(true)}
                >
                  12:00
                </button>
                <DatePicker
                  ref={startTimePickerRef}
                  selected={null}
                  onChange={() => {}}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="時刻"
                  dateFormat="HH:mm"
                  customInput={<span style={{ display: "none" }} />}
                />
              </div>
            </InputField>
            <InputField label="終了時刻" name="end_time">
              <div className={styles.NoteMeta__pickerWrapper}>
                <button
                  type="button"
                  className={styles.NoteMeta__pickerButton}
                  onClick={() => endTimePickerRef.current?.setOpen(true)}
                >
                  未設定
                </button>
                <DatePicker
                  ref={endTimePickerRef}
                  selected={null}
                  onChange={() => {}}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="時刻"
                  dateFormat="HH:mm"
                  customInput={<span style={{ display: "none" }} />}
                />
              </div>
            </InputField>
          </div>
          <InputField label="場所" name="place">
            <input type="text" className={styles.NoteMeta__input} defaultValue="" />
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
