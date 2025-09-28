import type { SVGProps } from "react";
import { SvgIcon } from "./SvgIcon";

interface Props extends Omit<SVGProps<SVGSVGElement>, "children"> {
  size?: number | string;
}

export const ChevronDownIcon = ({ size = 24, ...props }: Props) => {
  return (
    <SvgIcon
      size={size}
      title="Chevron Down"
      {...props}
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </SvgIcon>
  );
};
