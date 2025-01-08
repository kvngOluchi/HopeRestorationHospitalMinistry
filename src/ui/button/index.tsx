import React from "react";
import { ButtonProps } from "./types";

export default function Button({
  children,
  variant,
  type,
  className,
}: ButtonProps) {
  // Vrariants
  const outlineGreen = "bg-white text-[#204c27] border-2 border-[#204c27] px-10";
  const outlineBlack =
    "bg-white text-[#181A20] border-2 border-[#181A20] px-10";
  const filledGreen = "bg-[#204c27] text-white border-2 border-[#204c27] px-10";
  const filledBlack = "bg-[#181A20] text-white border-2 border-[#181A20] px-10";
  const outlineNone = "bg-none text-[#000000] border-none";
  const variants =
    variant === "outline-green"
      ? outlineGreen
      : variant === "outline-black"
      ? outlineBlack
      : variant === "filled-green"
      ? filledGreen
      : variant === "filled-black"
      ? filledBlack
      : variant === "outline-none"
      ? outlineNone
      : "";

  return (
    <button
      type={type ? type : "button"}
      className={`py-3 rounded-lg text-sm grid justify-center items-center grid-flow-col gap-5 font-semibold ${className} ${variants}`}
    >
      {children}
    </button>
  );
}
