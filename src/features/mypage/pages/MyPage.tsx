import { Avatar, PageTitle } from "@/components";
import { Button } from "@/components/ui/button";
import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { useAuthenticatedUser } from "@/features/auth";
import { useConfirm } from "@/hooks/useConfirm";

export const MyPage = () => {
  const authUser = useAuthenticatedUser();
  const { open, ConfirmDialog } = useConfirm();

  const handleDeleteAccount = () => {
    open(
      {
        title: "退会確認",
        message: "退会するとデータは復元できません。",
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
      <div className="grid place-items-center w-full h-30">
        <Avatar className="size-20" user={authUser} />
      </div>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>ユーザー名</FieldLegend>
          <FieldDescription>{authUser.displayName}</FieldDescription>
        </FieldSet>
        <FieldSet>
          <FieldLegend>メールアドレス</FieldLegend>
          <FieldDescription>{authUser.email}</FieldDescription>
        </FieldSet>
      </FieldGroup>
      <div className="py-10 flex justify-end">
        <Button onClick={handleDeleteAccount} variant="ghost">
          退会する
        </Button>
      </div>
      <ConfirmDialog />
    </>
  );
};
