import { BottomSheet, useBottomSheet } from "@/components/BottomSheet";
import styles from "./DashboardPage.module.css";

export function DashboardPage() {
  const { onOpen, onClose, ref, isOpen } = useBottomSheet();

  console.log("isOpen", isOpen);

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={onOpen} className={styles["trigger-button"]}>
        Open Bottom Sheet
      </button>
      <BottomSheet ref={ref} isOpen={isOpen} onClose={onClose}>
        <p>Hello World</p>
      </BottomSheet>
    </div>
  );
}
