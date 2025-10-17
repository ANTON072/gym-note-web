import { Avatar } from "@/components";
import { APP_NAME } from "@/constants/app";
import { useAuth } from "@/features/auth";
import { useRootStore } from "@/store/rootStore";
import { Link } from "@tanstack/react-router";
import { Drawer } from "./Drawer";
import { HamburgerMenu } from "./HamburgerMenu";

export const GlobalHeader = () => {
  const { user } = useAuth();
  const drawer = useRootStore((state) => state.drawer);

  const handleClickHamburgerMenu = () => {
    drawer.toggleDrawer();
  };

  return (
    <header className="flex place-content-between items-center h-header px-container bg-background border-b border-border">
      <div>{user && <Avatar className="size-10" user={user} />}</div>
      <h1 className="text-2xl font-bold">
        <Link to="/">{APP_NAME}</Link>
      </h1>
      <div className="h-full">
        {user && <HamburgerMenu isOpen={drawer.isOpen} onClick={handleClickHamburgerMenu} />}
      </div>
      <Drawer />
    </header>
  );
};
