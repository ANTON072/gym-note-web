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
  fullWidth?: boolean;
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
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  "data-loading"?: boolean | "true" | "false";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 統合された型定義
export type ButtonComponentProps = LinkButtonProps | ButtonProps;

type ButtonVariant = NonNullable<ButtonComponentProps["variant"]>;
type ButtonSize = NonNullable<ButtonComponentProps["size"]>;

const VARIANT_CLASS_NAME: Record<ButtonVariant, string> = {
  outlined: styles.Button__outlined,
  text: styles.Button__text,
  danger: styles.Button__danger,
};

const SIZE_CLASS_NAME: Record<ButtonSize, string> = {
  small: styles.Button__small,
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentProps>(
  (
    {
      to,
      children,
      className = "",
      variant,
      size,
      fullWidth,
      startIcon,
      endIcon,
      "data-loading": dataLoading,
      ...rest
    },
    ref,
  ) => {
    const isLoading = dataLoading === true || dataLoading === "true";
    const buttonClassName = clsx(
      styles.Button,
      variant ? VARIANT_CLASS_NAME[variant] : undefined,
      size ? SIZE_CLASS_NAME[size] : undefined,
      fullWidth ? styles.Button__fullWidth : undefined,
      className,
    );
    const innerContent = (
      <span className={styles.Button__content} aria-hidden={isLoading}>
        {startIcon ? <span className={styles.Button__startIcon}>{startIcon}</span> : null}
        {children}
        {endIcon ? <span className={styles.Button__endIcon}>{endIcon}</span> : null}
      </span>
    );
    // toが指定されている場合はLinkタグを使用
    if (to) {
      return (
        <Link
          to={to}
          className={buttonClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          data-loading={isLoading ? "true" : undefined}
          {...(rest as Omit<
            React.ComponentPropsWithoutRef<typeof Link>,
            "to" | "children" | "className"
          >)}
        >
          {innerContent}
        </Link>
      );
    }

    // toが指定されていない場合はbuttonタグを使用
    return (
      <button
        className={buttonClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        data-loading={isLoading ? "true" : undefined}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {innerContent}
      </button>
    );
  },
);

Button.displayName = "Button";
