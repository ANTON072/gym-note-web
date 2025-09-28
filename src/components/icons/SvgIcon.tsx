import type { SVGProps } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  size?: number | string;
  title?: string;
}

export const SvgIcon = ({
  children,
  size = 24,
  className,
  viewBox = "0 0 24 24",
  fill = "currentColor",
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  title = "Icon",
  ...props
}: SvgIconProps) => {
  const sizeValue = typeof size === "number" ? `${size}px` : size;
  const effectiveAriaLabel = ariaLabel || title;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      className={className}
      style={{ width: sizeValue, height: sizeValue }}
      aria-hidden={ariaHidden ?? false}
      aria-label={effectiveAriaLabel}
      role="img"
      {...props}
    >
      <title>{effectiveAriaLabel}</title>
      {children}
    </svg>
  );
};
