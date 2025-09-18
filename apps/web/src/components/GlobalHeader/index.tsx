import Avatar from "react-avatar";

import { useAuth } from "@/hooks";
import { APP_NAME } from "@packages/config";
import { Drawer } from "../Drawer";
import { HamburgerMenu } from "./HamburgerMenu";
import styles from "./styles.module.css";

export const GlobalHeader = () => {
  const { user } = useAuth();

  return (
    <header className={styles.root}>
      <div>
        {user && (
          <Avatar
            src={user.photoURL ?? undefined}
            name={user.displayName ?? undefined}
            size="40"
            round={true}
          />
        )}
      </div>
      <h1 className={styles.title}>{APP_NAME}</h1>
      <div className={styles.hamburger_menu}>
        <HamburgerMenu />
      </div>
      <Drawer />
    </header>
  );
};
