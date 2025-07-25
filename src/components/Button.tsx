import { ReactNode } from "react";

export const Button = ({
  style,
  label,
  icon,
  link,
}: {
  style?: string;
  label: string;
  icon: ReactNode;
  link: string;
}) => (
  <a
    className={`btn text-white font-bold py-3 px-5  rounded inline-flex items-center
  justify-center gap-1 md:gap-3 text-xs w-[200px] ${style}`}
    href={link}
    target="_blank"
  >
    {icon}
    <span>{label}</span>
  </a>
);
