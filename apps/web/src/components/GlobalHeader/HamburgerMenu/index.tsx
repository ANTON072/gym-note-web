import styles from "./styles.module.css";

export const HamburgerMenu = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" aria-label="Open menu" className={`${styles.button} tap`} {...props}>
      <svg viewBox="0 0 40 40" className={styles.icon}>
        <title>Open menu</title>
        <path id="top-line-1" d="M8,12 L32,12 Z" />
        <path id="middle-line-1" d="M8,20 L32,20 Z" />
        <path id="bottom-line-1" d="M8,28 L32,28 Z" />
      </svg>
    </button>
  );
};
