import { Link, type LinkProps } from "@tanstack/react-router";
import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Button.module.css";

// Linkタグの場合の型定義
type LinkButtonProps = {
  to: LinkProps["to"];
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "to" | "children" | "className">;

// buttonタグの場合の型定義
type ButtonProps = {
  to?: never;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 統合された型定義
type Props = LinkButtonProps | ButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ to, children, className = "", ...rest }, ref) => {
    // toが指定されている場合はLinkタグを使用
    if (to) {
      return (
        <Link
          to={to}
          className={clsx(styles.button, className)}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(rest as Omit<
            React.ComponentPropsWithoutRef<typeof Link>,
            "to" | "children" | "className"
          >)}
        >
          {children}
        </Link>
      );
    }

    // toが指定されていない場合はbuttonタグを使用
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
