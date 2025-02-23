import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className=" grid">
        {/*background image*/}
        <span className="w-full h-[500px] md:h-[600px] relative grid col-[-1/1] row-[-1/1]">
          <Image
            src={"/Image/churchbackky.png"}
            fill
            objectFit="cover"
            alt={"This is the Logo"}
          />
        </span>
        {/* Content */}
        <div className="grid col-[-1/1] row-[-1/1] relative text-white bg-[rgba(0,0,0,0.3)] grid-rows-[auto_1fr] gap-10 py-10 px-5 sm:px-10">
          <button className="border border-white px-10 py-1 w-max rounded-full mx-auto">
            GOD SAVES
          </button>
          <div className="h-full grid gap-5 content-center max-w-3xl mx-auto text-center">
            <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl lg:leading-[1.3]">
              Welcome to Hope Restoration Hospital Ministry Inc.
            </h1>
            <button className="font-semibold grid grid-flow-col gap-3 w-max items-center mx-auto mt-5">
              We Care, Preach and God Heals, Saves.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
