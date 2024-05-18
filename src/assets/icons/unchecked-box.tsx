import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const UnCheckedBox = (props: Props) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1.5"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
export default UnCheckedBox;
