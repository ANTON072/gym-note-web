import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Button.module.css";

// aタグの場合の型定義
type AnchorButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

// buttonタグの場合の型定義
type ButtonProps = {
  href?: never;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 統合された型定義
type Props = AnchorButtonProps | ButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ href, children, className = "", ...rest }, ref) => {
    // hrefが指定されている場合はaタグを使用
    if (href) {
      return (
        <a
          href={href}
          className={clsx(styles.button, className)}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    // hrefが指定されていない場合はbuttonタグを使用
    return (
      <button
        className={clsx(styles.button, className)}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
