import { useRootStore } from "@/store/rootStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Toaster.module.css";
import { CloseIcon } from "./icons/CloseIcon";

export type ToastType = {
  id: string;
  message: string;
  type: "normal" | "error";
  onHeightUpdate: (id: string, height: number) => void;
  yPosition?: number;
};

const ToasterItem = ({ message, type, id, onHeightUpdate, yPosition }: ToastType) => {
  const { toast } = useRootStore();
  const listRef = useRef<HTMLLIElement>(null);

  // 高さ測定用
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (listRef.current) {
      const height = listRef.current.offsetHeight;
      onHeightUpdate(id, height);
    }
  }, [id]);

  // 出現アニメーション用
  useGSAP(() => {
    if (!listRef.current || yPosition === undefined) return;

    gsap.fromTo(
      listRef.current,
      { autoAlpha: 0, "--y-position": `${yPosition + 20}px` },
      { autoAlpha: 1, "--y-position": `${yPosition}px`, duration: 0.3, ease: "power2.out" },
    );
  }, [yPosition]);

  const handleRemove = () => {
    gsap.to(listRef.current, {
      autoAlpha: 0,
      x: "+=20",
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => toast.remove(id),
    });
  };

  return (
    <li
      ref={listRef}
      className={styles.toaster_list}
      data-type={type}
      style={
        {
          "--y-position": yPosition !== undefined ? `${yPosition}px` : "-9999px",
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        className={styles.close_button}
        aria-label="閉じる"
        onClick={handleRemove}
      >
        <CloseIcon size={20} />
      </button>
      {message}
    </li>
  );
};

export const Toaster = () => {
  const { toast } = useRootStore();
  const [itemHeights, setItemHeights] = useState<Record<string, number>>({});

  const handleHeightUpdate = (id: string, height: number) => {
    setItemHeights((prev) => ({ ...prev, [id]: height }));
  };

  const { itemPositions, totalHeight } = useMemo(() => {
    const positions: Record<string, number> = {};
    let currentY = 0;

    for (const t of toast.toastList) {
      positions[t.id] = currentY;
      const height = itemHeights[t.id];
      if (height) {
        currentY += height + 8;
      }
    }
    return {
      itemPositions: positions,
      totalHeight: Math.max(0, currentY - 8),
    };
  }, [toast.toastList, itemHeights]);

  return (
    <section>
      <ol
        className={styles.toaster}
        style={
          {
            "--total-height": `${totalHeight}px`,
          } as React.CSSProperties
        }
      >
        {toast.toastList.map((t) => (
          <ToasterItem
            key={t.id}
            {...t}
            onHeightUpdate={handleHeightUpdate}
            yPosition={itemPositions[t.id]}
          />
        ))}
      </ol>
    </section>
  );
};
