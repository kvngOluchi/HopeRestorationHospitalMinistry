"use client";

import { Icon } from "@/ui/icon";
import { ICONS } from "@/ui/icon/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

interface NavItemProps {
  title: string;
  url?: string;
  subLinks?: { title: string; url: string }[];
  matcher: string[];
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
}

export default function NavItem({
  matcher,
  subLinks,
  title,
  url,
  setShowMobileNav,
}: NavItemProps) {
  const path = usePathname();
  const [showDropDown, setShowDropDown] = useState(false);

  if (subLinks) {
    return (
      <div className="relative">
        <button
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
          className={`grid grid-flow-col w-full justify-start gap-3 items-center text-sm border-b border-black py-5 transition-all  ${
            matcher.includes(path)
              ? "text-[#204c27] font-semibold"
              : "text-neutral-500"
          }`}
        >
          {title}
          {showDropDown ? (
            <Icon type={ICONS.arrow_right_icon} size={10} color="#204c27" />
          ) : (
            <Icon type={ICONS.arrow_right_icon} size={10} color="#204c27" />
          )}
        </button>

        <div
          className={`rounded-md absolute w-64 bg-white text-xs overflow-hidden transition-all ${
            showDropDown
              ? "max-h-[1000px] mt-2 border border-gray-300"
              : "max-h-0"
          }`}
        >
          {subLinks.map((link, i) => (
            <Link
              key={i}
              href={link.url ?? ""}
              onClick={() => setShowMobileNav(false)}
              className="px-5 py-3 block text-neutral-600 hover:bg-neutral-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={url ?? ""}
      onClick={() => setShowMobileNav(false)}
      className={`text-sm border-b border-black py-5 transition-all ${
        matcher.includes(path)
          ? "text-[#204c27] font-semibold"
          : "text-neutral-500 hover:px-5 hover:text-black"
      }`}
    >
      {title}
    </Link>
  );
}
