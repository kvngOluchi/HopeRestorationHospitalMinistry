import { Icon, ICONS } from "@/ui";
import Image from "next/image";
import React from "react";

export default function TractDetail() {
  return (
    <section className="layout-spacing pt-5 px-5">
      <div className="custom-container">
        <div className="flex">
          {" "}
          <h2 className="font-bold text-xl">Our Tract </h2>
          <Icon type={ICONS.round_tick_icon} size={20} color="#FFFFFF"></Icon>
        </div>
        <div className="w-10 h-1 bg-[#234f21]"></div>
        <div className="md:grid grid-cols-[1fr_1fr] mt-5 mb-5">
          <div>
            <p className="text-[#234f21] mb-2 text-lg font-bold">Literature</p>
            <p className="p-5 font-bold">
              {" "}
              Literature is one of the easiest and fastest means of
              disseminating information hence this ministry gives much attention
              to it. The Hope House Publications, an arm of the ministry is the
              publisher of the Hospital Tracts and Books. Our specialized tracts
              are in high demand and widely distributed in hospitals, prisons
              and general public. We wish to inform you that the request for our
              Hospital Tract from individuals is becoming apparently difficult
              to cope with. We will be glad if you and/ or your Organization can
              send us your goodwill donations to continue in this work of soul
              winning. There are testimonies of people who have been converted
              in prisons and hospitals through our tracts. To God be the Glory.
            </p>
          </div>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0052.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0049.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0048.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0067.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0066.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0065.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0064.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0051.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0053.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
          <span className="flex justify-center mt-2">
            <Image
              src={"/Image/IMG-20241227-WA0055.png"}
              alt="Picture of a RCOS"
              width={275}
              height={250}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
