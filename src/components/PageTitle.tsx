import styles from "./PageTitle.module.css";

export interface Props {
  /** 表示するタイトル文字列 */
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};
