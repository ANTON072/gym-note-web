import { PageTitle } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      <div>
        <div className="grid place-items-center w-full h-30">
          <Avatar className="size-20">
            <AvatarImage
              src={authUser.photoURL ?? undefined}
              alt={authUser.displayName ?? undefined}
            />
            <AvatarFallback>{authUser.displayName}</AvatarFallback>
          </Avatar>
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
      </div>
      <ConfirmDialog />
    </>
  );
};
