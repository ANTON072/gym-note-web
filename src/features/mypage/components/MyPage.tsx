import { PageTitle } from "@/components";
import { useAuthenticatedUser } from "@/features/auth";

export const MyPage = () => {
  const authUser = useAuthenticatedUser();

  console.log("authUser:", authUser);

  return (
    <div>
      <PageTitle title="マイページ" />
    </div>
  );
};
