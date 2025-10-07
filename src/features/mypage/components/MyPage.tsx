import { Avatar, Button, PageTitle } from "@/components";
import { useAuthenticatedUser } from "@/features/auth";

import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useState } from "react";
import styles from "./MyPage.module.css";

export const MyPage = () => {
  const authUser = useAuthenticatedUser();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleConfirm = () => {
    setIsConfirmOpen(true);
    console.log("退会処理");
  };

  return (
    <>
      <PageTitle title="マイページ" />
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <Avatar src={authUser.photoURL} name={authUser.displayName} size={80} />
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <span className={styles.label}>ユーザー名</span>
            <span className={styles.value}>{authUser.displayName}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>メールアドレス</span>
            <span className={styles.value}>{authUser.email}</span>
          </div>
        </div>
        <div className={styles.dangerZone}>
          <Button type="button" onClick={handleConfirm} variant="danger">
            退会する
          </Button>
        </div>
      </div>
      <ConfirmDialog
        isOpen={isConfirmOpen}
        message="本当に削除しますか？"
        confirmLabel="削除"
        onConfirm={handleConfirm}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </>
  );
};
