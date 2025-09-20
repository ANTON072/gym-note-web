import styles from "./Toaster.module.css";
import { CloseIcon } from "./icons/CloseIcon";

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
        <CloseIcon size={20} />
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
