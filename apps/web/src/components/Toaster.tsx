import { CircleX } from "lucide-react";

import styles from "./Toaster.module.css";

export type ToastType = {
  id: string;
  message: string;
  type: "normal" | "error";
};

interface ToasterItemProps {
  message: string;
  type?: "normal" | "error";
}

const ToasterItem = ({ message, type }: ToasterItemProps) => {
  return (
    <li className={styles.toaster_list} data-type={type}>
      <button type="button" className={styles.close_button} aria-label="閉じる">
        <CircleX />
      </button>
      {message}
    </li>
  );
};

export const Toaster = () => {
  return (
    <section>
      <ol className={styles.toaster}>
        <ToasterItem message="ログインしました" type="normal" />
      </ol>
    </section>
  );
};
