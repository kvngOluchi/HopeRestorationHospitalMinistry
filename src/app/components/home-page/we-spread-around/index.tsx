import React from "react";
import Image from "next/image";

export default function WeSpreadAround() {
  return (
    <section className="layout-spacing mt-20 px-1">
      <div className="custom-container grid md:grid-cols-[1fr_1fr]">
        <span className="">
          <Image
            src={"/Image/abstract-world-map-transparent-background.png"}
            alt="World Image"
            width={390}
            height={0}
          />
        </span>
        <div className=" px-5">
          <h2 className=" font-bold text-xl ">
            Serving the community with Love and Care through the word of Jesus
            Christ
          </h2>
          <div className="w-12 h-1 bg-[#204c27]"></div>
          <p>
            To provide quality medical care with compassion and dignity while
            sharing the love of God is our Mission
          </p>
          <div className="flex gap-1 text-center text-black lg:mx-24 lg:my-4 my-4 justify-center">
            <span className="bg-[#f1f1f1] p-1 border-radius rounded-lg">
              <h2 className="text-lg text-[#204c27]">20+</h2>
              <p className=" text-sm">years of experience</p>
            </span>
            <span className="bg-[#f1f1f1] p-1 border-radius rounded-lg">
              <h2 className="text-lg text-[#204c27]">20</h2>
              <p className=" text-sm">Offices world wide</p>
            </span>
            <span className="bg-[#f1f1f1] p-1 border-radius rounded-lg">
              <h2 className="text-lg text-[#204c27]">38K</h2>
              <p className=" text-sm">Workers Employed!!!</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
