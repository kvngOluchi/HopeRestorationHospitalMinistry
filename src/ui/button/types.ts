import { ICONS } from "../icon/types";

export interface ButtonProps {
  variant:
    | "outline-green"
    | "outline-black"
    | "filled-green"
    | "filled-black"
    | "outline-none";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}
