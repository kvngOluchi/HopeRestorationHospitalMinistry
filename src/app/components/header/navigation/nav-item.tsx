"use client";

import { Icon } from "@/ui/icon";
import { ICONS } from "@/ui/icon/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface NavItemProps {
  title: string;
  url?: string;
  subLinks?: { title: string; url: string }[];
  matcher: string[];
}

export default function NavItem({
  matcher,
  subLinks,
  title,
  url,
}: NavItemProps) {
  const path = usePathname();
  const [showDropDown, setShowDropDown] = useState(false);

  if (subLinks) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropDown(!showDropDown)}
          className={`grid grid-flow-col w-max gap-3 items-center text-sm ${
            matcher.includes(path)
              ? "text-[#204c27] font-semibold"
              : "text-neutral-500"
          }`}
        >
          {title}
          {showDropDown ? (
            <Icon type={ICONS.arrow_right_icon} size={10} color="#000000" />
          ) : (
            <Icon type={ICONS.arrow_right_icon} size={10} color="#000000" />
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
      className={`px-5 text-sm ${
        matcher.includes(path)
          ? "text-[#204c27] font-semibold"
          : "text-neutral-500"
      }`}
    >
      {title}
    </Link>
  );
}
