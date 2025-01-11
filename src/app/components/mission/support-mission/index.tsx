import { Icon, ICONS } from "@/ui";
import HowStartedButton, { DonateButton } from "@/ui/page-button";
import Image from "next/image";
import React from "react";
export default function SupportMission() {
  return (
    <section className="layout-spacing bg-[#1c1d1d] p-5 text-white">
      <div className="custom-container md:grid grid-cols-[1fr_1fr]">
        <div className="">
          {" "}
          <div className="flex">
            <h2 className="text-[#234f21] font-bold text-xl">
              Support Mission
            </h2>
            <Icon type={ICONS.arrow_top_right_icon} color="#234f21" size={20} />
          </div>
          <h1 className="text-[#234f21] text-2xl font-bold mt-5">
            Give the Gift of Medicine to those in Need
          </h1>
          <p className="mt-2">
            Your support helps provide good medicine to those in need across
            Africa. By funding medical projects for people who suffer from
            terminal diseases like HIV/AIDS, cancer and other, By helping you
            can bring health, joy and Hope to those in need Join Us in making a
            lasting impact!!
          </p>
          <div className="flex justify-around">
            {" "}
            <HowStartedButton />
            <DonateButton></DonateButton>
          </div>
        </div>
        <div>
          <span>
            {" "}
            <Image
              className="shadow-xl p-4 border-radius rounded-2xl"
              src={"/./image/IMG-20250106-WA0006.jpg"}
              height={100}
              width={710}
              alt="Hero Background Image"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
