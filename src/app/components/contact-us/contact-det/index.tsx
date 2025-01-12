import { Icon, ICONS } from "@/ui";
import React from "react";

export default function ContactDet() {
  return (
    <section className="layout-spacing">
      <div className="custom-container grid md:grid-cols-[1fr_1fr_1fr_1fr]">
        <div className="text-center items-center mx-auto p-10">
          <span className="w-11 block m-auto">
            <Icon type={ICONS.map_alt_icon} size={50} color="#084b1e" />
          </span>
          <h2 className="font-bold">VISIT US</h2>
          <p>The President, Hope Restoration Hospital Ministry Inc.</p>
          <p>Plot 2, Community Field Road, </p>
          <p className="text-[#084b1e] font-bold pb-5">
            Ogunu, Warri, Delta State, Nigeria
          </p>
          <div className="bg-[#084b1e] w-10 h-0.5 m-auto"></div>
        </div>
        <div className="text-center items-center mx-auto p-10">
          <span className="w-11 block m-auto">
            <Icon type={ICONS.office_icon} size={50} color="#084b1e" />
          </span>
          <h2 className="font-bold">CONTACT US</h2>
          <p>You can reach us through Email or our Website</p>
          <p className="text-[#084b1e] font-bold">
            Email: cdonwubolu@gmail.com
          </p>
          <p className="text-[#084b1e] font-bold pb-5">
            Website: hoperestorationhospitalministry.com
          </p>
          <div className="bg-[#084b1e] w-10 h-0.5 m-auto"></div>
        </div>
        <div className="text-center items-center mx-auto p-10">
          <span className="w-11 block m-auto">
            <Icon type={ICONS.phone_icon} size={50} color="#084b1e" />
          </span>
          <h2 className="font-bold">CALL US</h2>
          <p>You can call us on any of these numbers:</p>
          <p className="text-[#084b1e] font-bold pb-5">
            Tel: +234-8030910470, +234-8112914899, +234-8039124003
          </p>
          <div className="bg-[#084b1e] w-10 h-0.5 m-auto"></div>
        </div>
        <div className="text-center items-center mx-auto p-10">
          <span className="w-11 block m-auto">
            <Icon type={ICONS.bank_icon} size={50} color="#084b1e" />
          </span>
          <h2 className="font-bold mt-1">INVEST IN THE WORK</h2>
          <p className="mt-1">Wise men invest in the work of oul winning</p>
          <p className="text-[#084b1e] font-bold pb-5 mt-1">
            Zenith Bank PLC. A/C 1011350267
          </p>
          <div className="bg-[#084b1e] w-10 h-0.5 m-auto"></div>
        </div>
      </div>
    </section>
  );
}
