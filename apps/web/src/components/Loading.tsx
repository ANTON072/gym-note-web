import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import style from "./Loading.module.css";

gsap.registerPlugin(TextPlugin);

export const Loading = () => {
  const dotsRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!dotsRef.current) return;

    const dots = dotsRef.current;

    const timeline = gsap.timeline({ repeat: -1 });

    timeline.set(dots, { text: "" });

    for (let i = 0; i < 4; i++) {
      timeline.to(dots, {
        duration: 0.5,
        text: ".".repeat(i % 4),
        ease: "none",
      });
    }

    // 3つ目のドットの後に0.5秒待機
    timeline.to({}, { duration: 0.5 });
  }, []);

  return (
    <div className={style.loading}>
      Loading
      <span ref={dotsRef} />
    </div>
  );
};
