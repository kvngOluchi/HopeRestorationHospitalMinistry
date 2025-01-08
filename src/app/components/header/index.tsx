import { Logo } from "@/ui";
import React from "react";
import Navigation from "./navigation";
import Button from "@/ui/button/index";
import { ButtonProps } from "@/ui/button/types";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <header className="layout-spacing pt-5 pb-5">
      <div className="custom-container grid-flow-col justify-between grid xl:grid-cols-[auto_1fr_auto] justify-items-center gap-10 items-end">
        {/* Logo */}
        <div className="grid grid-flow-col gap-2 w-max items-baseline">
          <Logo size={45} />
          {/* <p className="hidden md:block">Hope Restoration Hospital Ministries</p> */}
        </div>

        <MobileNavigation />

        {/* Navigation */}
        <Navigation />

        {/* <div className="hidden xl:grid grid-cols-2 gap-3">
          <Button variant="outline-green" className="">
            Login
          </Button>
          <Button variant="filled-green">Register</Button>
        </div> */}
      </div>
    </header>
  );
}
