import { Link, type LinkProps } from "@tanstack/react-router";
import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Button.module.css";

// Linkタグの場合の型定義
type LinkButtonProps = {
  to: LinkProps["to"];
  children: React.ReactNode;
  className?: string;
  variant?: "outlined" | "danger";
  size?: "small";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  "data-loading"?: boolean | "true" | "false";
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "to" | "children" | "className">;

// buttonタグの場合の型定義
type ButtonProps = {
  to?: never;
  children: React.ReactNode;
  className?: string;
  variant?: "outlined" | "text" | "danger";
  size?: "small";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  "data-loading"?: boolean | "true" | "false";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 統合された型定義
export type ButtonComponentProps = LinkButtonProps | ButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentProps>(
  (
    {
      to,
      children,
      className = "",
      variant,
      size,
      startIcon,
      endIcon,
      "data-loading": dataLoading,
      ...rest
    },
    ref,
  ) => {
    const isLoading = dataLoading === true || dataLoading === "true";
    // toが指定されている場合はLinkタグを使用
    if (to) {
      return (
        <Link
          to={to}
          className={clsx(
            styles.Button,
            variant && styles[variant],
            size && styles[size],
            className,
          )}
          ref={ref as React.Ref<HTMLAnchorElement>}
          data-loading={isLoading ? "true" : undefined}
          {...(rest as Omit<
            React.ComponentPropsWithoutRef<typeof Link>,
            "to" | "children" | "className"
          >)}
        >
          <span className={styles.content} aria-hidden={isLoading}>
            {startIcon ? <span className={styles.startIcon}>{startIcon}</span> : null}
            {children}
            {endIcon ? <span className={styles.endIcon}>{endIcon}</span> : null}
          </span>
        </Link>
      );
    }

    // toが指定されていない場合はbuttonタグを使用
    return (
      <button
        className={clsx(styles.Button, variant && styles[variant], size && styles[size], className)}
        ref={ref as React.Ref<HTMLButtonElement>}
        data-loading={isLoading ? "true" : undefined}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        <span className={styles.content} aria-hidden={isLoading}>
          {startIcon ? <span className={styles.startIcon}>{startIcon}</span> : null}
          {children}
          {endIcon ? <span className={styles.endIcon}>{endIcon}</span> : null}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
