"use client";
import Image from "next/image";
import React from "react";

export default function MissionHero() {
  return (
    <section>
      <div className=" grid">
        {/*background image*/}
        <span className="w-full h-[300px] md:h-[400px] relative grid col-[-1/1] row-[-1/1]">
          <Image
            src={"/Image/missions-back.png"}
            fill
            objectFit="cover"
            alt="Hero Background Image"
          />
        </span>
        {/* Content */}
        <div className="grid col-[-1/1] row-[-1/1] relative text-white bg-[rgba(0,0,0,0.3)] grid-rows-[auto_1fr] gap-10 py-10 px-5 sm:px-10">
          <button className="border border-white px-10 py-1 w-max rounded-full mx-auto">
            Hope Restoration Hospital Ministry
          </button>
          <div className="h-full grid gap-5 content-center max-w-3xl mx-auto text-center">
            <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl lg:leading-[1.3]">
              Bringing Light to the darkness, hope to the hopeless
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
