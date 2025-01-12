"use client";
import { Icon, ICONS } from "@/ui";
import Image from "next/image";
import React from "react";
import MissionHero from "../components/mission/mission-hero";
import OurMission from "../components/mission/our-mission";
import SupportMission from "../components/mission/support-mission";
// import Mission from "../components/mission";

export default function page() {
  return (
    <main>
      <MissionHero />
      <OurMission />
      <SupportMission />
    </main>
  );
}
