import { PageTitle } from "@/components";
import type { ComponentProps } from "react";
import { NoteStatusChip } from "./NoteStatusChip";
import styles from "./NoteTitle.module.css";

type NoteTitleProps = ComponentProps<typeof PageTitle>;
type NoteStatusChipProps = ComponentProps<typeof NoteStatusChip>;

interface Props {
  title: NoteTitleProps["title"];
  status: NoteStatusChipProps["status"];
}

export const NoteTitle = ({ title, status }: Props) => {
  return (
    <div className={styles.NoteTitle}>
      <PageTitle title={title} />
      <NoteStatusChip status={status} />
    </div>
  );
};
