import styles from "./Avatar.module.css";

interface Props {
  size: number;
  src?: string | null;
  name?: string | null;
}

export const Avatar = ({ size, src, name }: Props) => {
  return (
    <>
      {src ? (
        <img
          className={styles.avatar_image}
          src={src}
          alt={name ?? "Avatar"}
          style={{ width: size, height: size }}
        />
      ) : (
        <div
          className={styles.avatar_text}
          style={{ width: size, height: size, fontSize: size / 2 }}
        >
          {name?.charAt(0)}
        </div>
      )}
    </>
  );
};
