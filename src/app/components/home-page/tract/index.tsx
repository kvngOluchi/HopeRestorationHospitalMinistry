import Button from "@/ui/button";
import Image from "next/image";
import React from "react";

export default function Tract() {
  return (
    <section className="layout-spacing mt-28 bg-[#ededef] pb-10 ">
      <div className="custom-container">
        <div className=" text-center font-bold">
          <h2 className="mt-20">Tract from our mission</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <div className="grid md:grid-cols-3 m-auto gap-x-2">
          <div className=" border-2  ">
            <span className="flex justify-center">
              <Image
                className=""
                src={"/./image/IMG-20241227-WA0049.jpg"}
                alt="Picture of a Road Reclaimer"
                width={275}
                height={250}
              />
            </span>
          </div>
          <div>
            <p className="p-5 font-bold">
              Literature is one of the easiest and fastest means of
              disseminating information hence this ministry gives much attention
              to it. The Hope House Publications, an arm of the ministry is the
              piblisher of thr Hospital Tracts and Books. Our specialized tracts
              and books. Our specialized tracts are in high demand and widely
              distributed in hospitals, prisons and general public. We wish to
              inform you that the request for our Hospital Tract from
              individuals and Christain books in becoming apparently difficult
              to cope with. We will be glad if you and/ or your Organization can
              send us your goodwill donations. There are testimonies of people
              who have been converted in prisons and hospitals through our
              tracts. To God be the Glory.
            </p>
          </div>
          <div className=" border-2  ">
            <span className="flex justify-center">
              <Image
                src={"/./image/IMG-20241227-WA0050.jpg"}
                alt="Picture of a RCOS"
                width={275}
                height={250}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
