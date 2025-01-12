"use client";

import { NAVIGATION_SCHEMA } from "@/constants/navigation";
import { ICONS, Icon, Logo } from "@/ui";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import NavItem from "./nav-item";

export default function MobileNavigation() {
  const path = usePathname();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const handelShowMobileNavToggle = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <button onClick={handelShowMobileNavToggle} className="xl:hidden">
        <Icon type={ICONS.hamburger_menu_icon} size={36} color="#204c27" />
      </button>

      <div
        className={`fixed w-full h-screen top-0 z-10 transition-all duration-500 ${
          showMobileNav ? "right-0" : "-right-full"
        }`}
      >
        <div
          className={`grid grid-rows-[auto_1fr_auto] p-8 sm:p-10 ml-auto bg-white items-start gap-10 content-start h-full w-full max-w-lg`}
        >
          <div className="grid gap-10 grid-flow-col justify-between">
            <Logo size={40} />
            <button onClick={handelShowMobileNavToggle} className="">
              <Icon type={ICONS.close_icon} size={40} color="#204c27" />
            </button>
          </div>

          <div className="grid gap-3">
            {NAVIGATION_SCHEMA.map((nav, i) => (
              <NavItem
                key={i}
                matcher={nav.matcher}
                title={nav.title}
                subLinks={undefined}
                url={nav.url}
                setShowMobileNav={setShowMobileNav}
              />
            ))}
          </div>

          {/* <div className="grid gap-3">
            <Button variant="outline-green">Login</Button>
            <Button variant="filled-green">Register</Button>
          </div> */}
        </div>
      </div>
    </>
  );
}
