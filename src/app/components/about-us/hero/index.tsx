import { ICONS, Icon } from "@/ui";
import Image from "next/image";
import React from "react";

export default function AboutUsHero() {
  return (
    <section className="">
      <div className=" grid">
        {/*background image*/}
        <span className="w-full h-[300px] md:h-[300px] relative grid col-[-1/1] row-[-1/1]">
          <Image
            src={"/Image/Ai Backyy.png"}
            fill
            objectFit="cover"
            alt="Hero Background Image"
          />
        </span>
        {/* Content */}
        <div className="grid col-[-1/1] row-[-1/1] relative text-white bg-gradient-to-r from-[rgba(0,0,0,0.98)] to-[rgba(255,255,255,0.2)]  md:p-20 py-10 px-5">
          <div className="h-full md:content-start max-w-3xl mr-auto text-left md:w-74 lg:ml-1">
            <h1 className="text-[#E2E2E2] text-4xl font-bold">
              Hope Restoration Hospital Ministries Inc.
            </h1>
            <div className="w-12 h-2 bg-[#423e73] "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
