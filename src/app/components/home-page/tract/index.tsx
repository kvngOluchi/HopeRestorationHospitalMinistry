import { TractButton } from "@/ui/page-button";
import Image from "next/image";
import React from "react";

export default function Tract() {
  return (
    <section className="layout-spacing mt-28 bg-[#1c1d1d] pb-8 text-white ">
      <div className="custom-container">
        <div className=" text-center font-bold">
          <h2 className="mt-20">Tracts from our mission</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <div className="grid md:grid-cols-3 m-auto gap-x-2">
          <div className=" ">
            <span className="flex justify-center py-3">
              <Image
                className=""
                src={"/Image/i-watched-her-die.jpg"}
                alt="Picture of a Road Reclaimer"
                width={275}
                height={250}
              />
            </span>
          </div>
          <div>
            {" "}
            <span className="flex justify-center py-3">
              <Image
                className=""
                src={"/Image/IMG-20241227-WA0054.png"}
                alt="Picture of a Road Reclaimer"
                width={275}
                height={250}
              />
            </span>
          </div>
          <div className=" ">
            <span className="flex justify-center py-3">
              <Image
                src={"/Image/IMG-20241227-WA0050.png"}
                alt="Picture of a RCOS"
                width={275}
                height={250}
              />
            </span>
          </div>
        </div>
        <div className="mt-4 m-auto">
          <TractButton></TractButton>
        </div>
      </div>
    </section>
  );
}
