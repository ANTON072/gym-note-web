import { Avatar, Button, PageTitle } from "@/components";
import { useAuthenticatedUser } from "@/features/auth";
import { useConfirm } from "@/hooks/useConfirm";
import styles from "./MyPage.module.css";

export const MyPage = () => {
  const authUser = useAuthenticatedUser();
  const { open, ConfirmDialog } = useConfirm();

  const handleDeleteAccount = () => {
    open(
      {
        message: "本当に退会しますか？",
        confirmLabel: "退会する",
      },
      () => {
        console.log("退会処理");
      },
    );
  };

  return (
    <>
      <PageTitle title="マイページ" />
      <div className={styles.MyPage}>
        <div className={styles.MyPage__avatarSection}>
          <Avatar src={authUser.photoURL} name={authUser.displayName} size={80} />
        </div>
        <div className={styles.MyPage__infoSection}>
          <div className={styles.MyPage__infoItem}>
            <span className={styles.MyPage__label}>ユーザー名</span>
            <span className={styles.MyPage__value}>{authUser.displayName}</span>
          </div>
          <div className={styles.MyPage__infoItem}>
            <span className={styles.MyPage__label}>メールアドレス</span>
            <span className={styles.MyPage__value}>{authUser.email}</span>
          </div>
        </div>
        <div className={styles.MyPage__dangerZone}>
          <Button type="button" onClick={handleDeleteAccount} variant="danger">
            退会する
          </Button>
        </div>
      </div>
      <ConfirmDialog />
    </>
  );
};
