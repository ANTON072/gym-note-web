import { Avatar } from "@/components";
import { useAuth } from "@/features/auth";
import { useRootStore } from "@/store/rootStore";
import { APP_NAME } from "@/constants/app";
import { Link } from "@tanstack/react-router";
import { Drawer } from "./Drawer";
import styles from "./GlobalHeader.module.css";
import { HamburgerMenu } from "./HamburgerMenu";

export const GlobalHeader = () => {
  const { user } = useAuth();
  const drawer = useRootStore((state) => state.drawer);

  const handleClickHamburgerMenu = () => {
    drawer.toggleDrawer();
  };

  return (
    <header className={styles.root}>
      <div>{user && <Avatar src={user.photoURL} name={user.displayName} size={40} />}</div>
      <h1 className={styles.title}>
        <Link to="/">{APP_NAME}</Link>
      </h1>
      <div className={styles.hamburgerMenu}>
        <HamburgerMenu isOpen={drawer.isOpen} onClick={handleClickHamburgerMenu} />
      </div>
      <Drawer />
    </header>
  );
};
