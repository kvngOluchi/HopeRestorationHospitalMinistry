import React from "react";
import Button from "@/ui/button";
import HowStartedButton, { DonateButton } from "@/ui/page-button";

export default function ServingHospital() {
  return (
    <section className="layout-spacing mb-5">
      <div className="custom-container bg-[#e5e7eb] text-center px-1 pb-5">
        <h2 className="font-bold text-2xl">
          Serving God's People in Hospitals since 1994
        </h2>
        <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        <p className="text-lg font-bold px-5">
          Hope Restoration Hospital INC. is a Missionary body devoted to sharing
          the Gospel of Jesus Christ in Hospitals in Affrica and among Africans,
          Wherever they may be
        </p>
        <p className="text-lg font-bold px-5">
          Working with local hospitals and other bodies, we offer medical care
          and and the Christ's message of peace, hope to those going through
          terminal medical conditons such as HIV/AIDS, Cancer and others. Once
          this seeds of faith are planted, we move to other Hospitals where the
          Gospel message has not been heard
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
