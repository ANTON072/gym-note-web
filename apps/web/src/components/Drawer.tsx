import { useRootStore } from "@/store/rootStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { toast } from "sonner";

import { logout } from "@/lib/firebase/auth";
import styles from "./Drawer.module.css";

const menuList = [
  { name: "Today's Note", href: "/today" },
  { name: "Daily Note", href: "/daily" },
  { name: "Register Exercise", href: "/exercises" },
];

export const Drawer = () => {
  const drawerRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [isMutating, setIsMutating] = useState(false);

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
      toast.success("ログアウトしました");
      drawerStore.closeDrawer();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "ログアウトに失敗しました";
      toast.error(errorMessage);
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
      <div ref={backdropRef} className={styles.backdrop} onClick={handleClose} />
      <nav ref={drawerRef} className={styles.root}>
        <ul>
          {menuList.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="tap">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <hr className={styles.divider} />
        <div
          style={{
            display: "grid",
            gap: "var(--size-5)",
          }}
        >
          <ul>
            <li>
              <a href="/contact" className="tap">
                Contact
              </a>
            </li>
          </ul>
          <ul>
            <li
              style={{
                fontSize: "var(--font-size-1)",
              }}
            >
              <button type="button" className="button" onClick={handleLogout} disabled={isMutating}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
