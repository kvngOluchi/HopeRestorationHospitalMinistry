import { Icon } from "@/ui/icon";
import { ICONS } from "@/ui/icon/types";
import { Logo } from "@/ui";
import React from "react";

export default function Footer() {
  return (
    <section className="layout-spacing bg-[#1c1d1d] text-white p-5">
      <div className="custom-container">
        <div className=" grid  md:grid-cols-[1fr_1fr_1fr] ">
          <div>
            <div className="relative ps-5 mt-10">
              <Logo size={170}></Logo>
            </div>
            <div className="my-1">
              <p>Follow us on social media</p>
            </div>
            <div className="flex space-x-3 -mx-1">
              <Icon
                type={ICONS.facebook_icon}
                color={"#234e24"}
                size={20}
              ></Icon>
              <Icon
                type={ICONS.twitter_icon}
                color={"#234e24"}
                size={20}
              ></Icon>
              <Icon
                type={ICONS.instagram_icon}
                color={"#234e24"}
                size={20}
              ></Icon>
              <Icon
                type={ICONS.linkedin_icon}
                color={"#234e24"}
                size={20}
              ></Icon>
            </div>
          </div>
          <div className=" space-y-2 my-14 block">
            <div className="block">
              <p className=" font-bold">ADDRESS:</p>
              <p>
                Plot 2, Community Field Road, Ogunu, Warri, Delta State, Nigeria
              </p>
            </div>
            <div className="block">
              <p className=" font-bold">Tel:</p>
              <p>+234-8030910470</p>
              <p>+234-8112914899</p>
              <p>+234-8039124003</p>
            </div>
          </div>
          <div className=" space-y-2 my-1 block md:my-10">
            <div className="block">
              <p className=" font-bold">Email:</p>
              <p>cdonwubolu@gmail.com</p>
            </div>
            <div className="block">
              <p className=" font-bold">Our Banker:</p>
              <p>Zenith Bank PLC. A/C 1011350267</p>
            </div>
            <div className="block">
              <p className=" font-bold">ORGANISATION:</p>
            </div>
            <div className="block">
              <a href="">HOPE RESTORATION HOSPITAL MINISTRY INC.</a>
              <p>The Hospital Missionaries</p>
              <p>Restoring Hope to the Hopeless</p>
            </div>
          </div>
        </div>
        <div className="block text-center mt-9 text-sm">
          <p>
            © 2024 HOPE RESTORATION HOSPITAL MINISTRY INC. All Rights Reserved
          </p>
          <p>WE CARE, PREACH AND GOD HEALS, SAVES.</p>
          <a href="" className=" font-light">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
