import { useRootStore } from "@/store/rootStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { GoSignOut } from "react-icons/go";
import { GoPerson } from "react-icons/go";

import { logout } from "@/features/auth/lib/auth";
import { Link } from "@tanstack/react-router";

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
      <div
        ref={backdropRef}
        className="fixed top-header bottom-0 left-0 w-svw z-1 bg-foreground/60"
        onClick={handleClose}
      />
      <nav
        ref={drawerRef}
        className="fixed top-header right-0 bottom-0 z-1 w-[80svw] p-4 bg-background grid grid-rows-[1fr_auto]"
      >
        <div>
          <ul className="grid gap-3">
            {menuList.map((item) => (
              <li key={item.name}>
                <Link to={item.href} onClick={handleClose} className="text-link-foreground">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <hr className="block w-full h-px my-5 bg-foreground" />
          <ul className="grid gap-3 p-0 m-0 list-none">
            <li>
              <Link
                to="/mypage"
                className="flex gap-1 items-center text-link-foreground"
                onClick={handleClose}
              >
                <GoPerson />
                マイページ
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isMutating}
                className="flex gap-1 items-center text-link-foreground"
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
