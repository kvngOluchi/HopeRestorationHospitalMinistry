import React from "react";
import HowStartedButton, { DonateButton } from "@/ui/page-button";

export default function ServingHospital() {
  return (
    <section className="layout-spacing mb-5 bg-[#1c1d1d] text-white">
      <div className="custom-container text-center px-1 pb-5">
        <h2 className="font-bold text-2xl">
          Serving God's People in Hospitals since 1994
        </h2>
        <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        <p className="text-lg font-bold px-5">
          Hope Restoration Hospital Inc. is a Missionary body devoted to sharing
          the Gospel of Jesus Christ in Hospitals in Africa and beyond.
        </p>
        <p className="text-lg font-bold px-5">
          We work with local hospitals and other bodies, to offer medical care
          and the Christ's message of peace, hope to those going through
          terminal medical conditons such as HIV/AIDS, Cancer, Leprosy and
          others.
        </p>
        <div className="flex justify-around">
          {" "}
          <HowStartedButton />
          <DonateButton></DonateButton>
        </div>
      </div>
    </section>
  );
}
