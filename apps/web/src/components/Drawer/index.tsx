import { useRootStore } from "@/store/rootStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import styles from "./styles.module.css";

const menuList = [
  { name: "Today's Note", href: "/today" },
  { name: "Daily Note", href: "/daily" },
  { name: "Register Exercise", href: "/exercises" },
  { name: "Logout", href: "#" },
];

export const Drawer = () => {
  const drawerRef = useRef<HTMLElement>(null);
  const drawerStore = useRootStore((state) => state.drawer);

  useGSAP(() => {
    // 初期状態で閉じた状態に設定（アニメーションなし）
    gsap.set(drawerRef.current, {
      x: "100%",
    });
  }, []);

  useGSAP(() => {
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

  return (
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
      <ul>
        <li>
          <a href="/contact" className="tap">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
