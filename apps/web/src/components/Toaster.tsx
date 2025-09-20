import { useRootStore } from "@/store/rootStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "./Toaster.module.css";
import { CloseIcon } from "./icons/CloseIcon";

export type ToastType = {
  id: string;
  message: string;
  type: "normal" | "error";
};

const ToasterItem = ({ message, type, id }: ToastType) => {
  const { toast } = useRootStore();
  const listRef = useRef<HTMLLIElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      listRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
    );
  }, []);

  return (
    <li ref={listRef} className={styles.toaster_list} data-type={type}>
      <button
        type="button"
        className={styles.close_button}
        aria-label="閉じる"
        onClick={() => toast.remove(id)}
      >
        <CloseIcon size={20} />
      </button>
      {message}
    </li>
  );
};

export const Toaster = () => {
  const { toast } = useRootStore();

  return (
    <section>
      <ol className={styles.toaster}>
        {toast.toastList.map((t) => (
          <ToasterItem key={t.id} {...t} />
        ))}
      </ol>
    </section>
  );
};
