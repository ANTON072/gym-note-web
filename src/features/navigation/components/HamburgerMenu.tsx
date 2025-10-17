import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface HamburgerMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const HamburgerMenu = ({ isOpen, ...props }: HamburgerMenuProps) => {
  const topLineRef = useRef<SVGPathElement>(null);
  const middleLineRef = useRef<SVGPathElement>(null);
  const bottomLineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const topLine = topLineRef.current;
    const middleLine = middleLineRef.current;
    const bottomLine = bottomLineRef.current;

    if (!topLine || !middleLine || !bottomLine) return;

    if (isOpen) {
      const tl = gsap.timeline();

      tl.to([topLine, bottomLine], {
        duration: 0.3,
        ease: "back.in(1.7)",
        attr: {
          d: "M8,20 L32,20 Z",
        },
      })
        .set(middleLine, { opacity: 0 })
        .to(topLine, {
          duration: 0.3,
          ease: "back.out(1.7)",
          attr: { d: "M12,12 L28,28 Z" },
        })
        .to(
          bottomLine,
          {
            duration: 0.3,
            ease: "back.out(1.7)",
            attr: { d: "M12,28 L28,12 Z" },
          },
          "<",
        );
    } else {
      const tl = gsap.timeline();

      tl.to(topLine, {
        duration: 0.3,
        ease: "back.in(1.7)",
        attr: { d: "M8,20 L32,20 Z" },
      })
        .to(
          bottomLine,
          {
            duration: 0.3,
            ease: "back.in(1.7)",
            attr: { d: "M8,20 L32,20 Z" },
          },
          "<",
        )
        .set(middleLine, { opacity: 1 })
        .to(topLine, {
          duration: 0.3,
          ease: "back.out(1.7)",
          attr: { d: "M8,12 L32,12 Z" },
        })
        .to(
          bottomLine,
          {
            duration: 0.3,
            ease: "back.out(1.7)",
            attr: { d: "M8,28 L32,28 Z" },
          },
          "<",
        );
    }
  }, [isOpen]);

  return (
    <button
      type="button"
      aria-label="Open menu"
      className="relative inline-flex items-center justify-center w-full h-full p-0 bg-transparent border-none tap"
      {...props}
    >
      <svg
        viewBox="0 0 40 40"
        className="w-hamburger-icon h-hamburger-icon cursor-pointer fill-none stroke-[color:var(--foreground)] stroke-[3px]"
      >
        <title>Open menu</title>
        <path ref={topLineRef} d="M8,12 L32,12 Z" />
        <path ref={middleLineRef} d="M8,20 L32,20 Z" />
        <path ref={bottomLineRef} d="M8,28 L32,28 Z" />
      </svg>
    </button>
  );
};
