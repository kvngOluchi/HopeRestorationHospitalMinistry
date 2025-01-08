import { NAVIGATION_SCHEMA } from "@/constants/navigation";
import React from "react";
import NavItem from "./nav-item";

export default function Navigation() {
  return (
    <nav className="hidden xl:grid grid-flow-col w-max items-center gap-3">
      {NAVIGATION_SCHEMA.map((nav, i) => (
        <NavItem
          matcher={nav.matcher}
          title={nav.title}
          key={i}
          subLinks={undefined}
          url={nav.url}
        />
      ))}
    </nav>
  );
}
