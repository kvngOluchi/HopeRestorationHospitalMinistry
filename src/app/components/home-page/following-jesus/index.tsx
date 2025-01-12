import Image from "next/image";
import React from "react";

export default function FollowingJesus() {
  return (
    <section className=" layout-spacing py-9 mt-2 px-1">
      <div className="custom-container grid md:grid-cols-[1fr_1fr]">
          <span className="m-auto">
            <Image
              className="shadow-xl p-4 border-radius rounded-2xl"
              src={"/Image/home back.png"}
              alt="World Image"
              width={370}
              height={0}
            />
          </span>
        <div className=" py-5 px-5">
          <h2 className=" font-bold text-xl ">
            Following Jesus Wherever we are
          </h2>
          <div className="w-12 h-1 bg-[#204c27]"></div>
          <p>
            We are excited to welcome you to our mission from all over the world. Hope Restoration Hospital Ministry Inc. with the headquaters in warri, Delta state, Nigeria is a registered Christian NGO involved in Hospital Evangelism and Rural Medical Outreach, where we preach the undiluted Gospel and offer free Medical Services to the people in need
          </p>
          <div className="flex gap-1 justify-center lg:mx-24 lg:my4 my-1">
            <span>
              <Image
                className="shadow-xl p-2 border-radius rounded-lg"
                src={"/Image/donations-picture.png"}
                width={120}
                height={0}
                alt="donations"
              />
            </span>
            <span>
              <Image
                className="shadow-xl p-2 border-radius rounded-lg"
                src={"/Image/bible-picture.png"}
                width={120}
                height={0}
                alt="donations"
              />
            </span>
            <span>
              <Image
                className="shadow-xl p-2 border-radius rounded-lg"
                src={"/Image/funds-backky.png"}
                width={120}
                height={0}
                alt="donations"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
