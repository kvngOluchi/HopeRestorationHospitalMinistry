"use client";
import React from "react";
import AboutUs from "../components/about-us/hero";
import AboutUsHero from "../components/about-us/hero";
import AboutUsDefinition from "../components/about-us/about-us-definition";
import HowItStarted from "../components/about-us/how-it-started";
import BoardOfTrustee from "../components/about-us/board-of-trustees";

export default function page() {
  return (
    <main>
      <AboutUsDefinition />
      <AboutUsHero />
      <HowItStarted />
      <BoardOfTrustee />
    </main>
  );
}
