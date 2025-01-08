import React from "react";
import Image from "next/image";

export default function ElectricalPowerHero() {
  return (
    <section className="">
      <div className="grid">
        {/*background*/}
        <span className="w-[100%] h-[300px] md:h-[400px] relative grid col-[-1/1] row-[-1/1] ">
          <Image
            alt="Construction background"
            objectFit="cover"
            src={"/./Image/Electrical-wallpaper.webp"}
            fill
          />
        </span>
        {/* content */}
        <div className="grid col-[-1/1] row-[-1/1] relative text-white bg-gradient-to-r from-[rgba(0,0,0,0.98)] to-[rgba(255,255,255,0.2)]  md:p-20 py-10 px-5">
          <div className="h-full md:content-start max-w-3xl mr-auto text-left md:w-64 lg:ml-1">
            <h1 className="text-[#E2E2E2] text-3xl font-bold">
              THE POWER THAT MAKES IT POSSIBLE
            </h1>
            <div className="w-12 h-2 bg-[#423e73] "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
