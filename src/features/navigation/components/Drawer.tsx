import { useRootStore } from "@/store/rootStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { GoSignOut } from "react-icons/go";
import { GoPerson } from "react-icons/go";

import { logout } from "@/features/auth/lib/auth";
import { Link } from "@tanstack/react-router";
import styles from "./Drawer.module.css";

const menuList = [
  { name: "本日のノート", href: "/notes/today" },
  { name: "ノート", href: "/notes" },
  { name: "種目", href: "/exercises" },
];

export const Drawer = () => {
  const drawerRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [isMutating, setIsMutating] = useState(false);
  const toast = useRootStore((state) => state.toast);

  const drawerStore = useRootStore((state) => state.drawer);

  useGSAP(() => {
    gsap.set(backdropRef.current, {
      autoAlpha: 0,
      pointerEvents: "none",
    });
    gsap.set(drawerRef.current, {
      x: "100%",
    });
  }, []);

  useGSAP(() => {
    gsap.to(backdropRef.current, {
      autoAlpha: drawerStore.isOpen ? 1 : 0,
      duration: 0.3,
      ease: "linear",
      pointerEvents: drawerStore.isOpen ? "auto" : "none",
    });
    if (drawerStore.isOpen) {
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
        onStart: () => {
          document.body.style.overflow = "hidden";
        },
      });
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });
    }
  }, [drawerStore.isOpen]);

  const handleLogout = async () => {
    try {
      setIsMutating(true);
      await logout();
      toast.add({ message: "ログアウトしました" });
      drawerStore.closeDrawer();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "ログアウトに失敗しました";
      toast.add({ message: errorMessage, type: "error" });
    } finally {
      setIsMutating(false);
    }
  };

  const handleClose = () => {
    drawerStore.closeDrawer();
  };

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents:
      Backdrop is intended to be closed by mouse only; keyboard interaction is not required.*/}
      <div ref={backdropRef} className={styles.Drawer__backdrop} onClick={handleClose} />
      <nav ref={drawerRef} className={styles.Drawer}>
        <div>
          <ul className={styles.Drawer__menu}>
            {menuList.map((item) => (
              <li key={item.name}>
                <Link to={item.href} onClick={handleClose}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <hr className={styles.Drawer__divider} />
          <ul className={styles.Drawer__menu}>
            <li>
              <Link to="/mypage" className={styles.Drawer__iconButton} onClick={handleClose}>
                <GoPerson />
                マイページ
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isMutating}
                className={styles.Drawer__iconButton}
              >
                <GoSignOut />
                ログアウト
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
