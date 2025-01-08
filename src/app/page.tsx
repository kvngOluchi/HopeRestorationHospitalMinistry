import React from "react";
import Header from "./components/header";
import Image from "next/image";
import Hero from "./components/home-page/hero";
import WeSpreadAround from "./components/home-page/we-spread-around";
import Tract from "./components/home-page/tract";
import FollowingJesus from "./components/home-page/following-jesus";
import Message from "./components/home-page/message";
import ServingHospital from "./components/home-page/serving-hospitals";

export default function Page() {
  return (
    <main>
      <Hero />
      <FollowingJesus />
      <WeSpreadAround />
      <Tract />
      <Message />
      <ServingHospital />
    </main>
  );
}
