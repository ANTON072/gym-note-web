import { AvatarFallback, AvatarImage, Avatar as ShadcnAvatar } from "@/components/shadcn/avatar";
import { cn } from "@/lib/utils";
import type { User } from "firebase/auth";

interface Props {
  user: User;
  className?: string;
}

export const Avatar = ({ user, className }: Props) => {
  return (
    <ShadcnAvatar className={cn(className)}>
      <AvatarImage src={user.photoURL ?? undefined} alt={user.displayName ?? undefined} />
      <AvatarFallback>{user.displayName}</AvatarFallback>
    </ShadcnAvatar>
  );
};
