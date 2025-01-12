import React from "react";
import Link from "next/link";
import Button from "../button";
import { Icon } from "../icon";
import { ICONS } from "../icon/types";

export default function HowStartedButton() {
  return (
    <Link href="/About-Us">
      <Button variant="filled-green" className="m-auto">
        How it Started
      </Button>
    </Link>
  );
}
export function DonateButton() {
  return (
    <Link href="/Contact-Us">
      <Button variant="filled-green" className="m-auto">
        Donate
        <Icon type={ICONS.arrow_right_icon} size={20} color="#FFFFFF" />
      </Button>
    </Link>
  );
}
