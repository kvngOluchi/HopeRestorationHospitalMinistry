import Image from "next/image";
import React from "react";

export default function FollowingJesus() {
  return (
    <section className=" layout-spacing py-9 mt-2 px-1">
      <div className="custom-container grid md:grid-cols-[1fr_1fr]">
        <div className="space-y-2 ">
          <span className="">
            <Image
              className="shadow-xl p-4 border-radius rounded-2xl"
              src={"/./image/home back.jpg"}
              alt="World Image"
              width={370}
              height={0}
            />
          </span>
        </div>
        <div className=" py-5 px-5">
          <h2 className=" font-bold text-xl ">
            Following Jesus Wherever we are
          </h2>
          <div className="w-12 h-1 bg-[#204c27]"></div>
          <p>
            We are excited to welcome you to our mission from all over the world
            we intend on sharing inspiring stories of faith and service through
            our work together.
          </p>
          <p>
            We are going to share testimonies from our work through christ
            jesus.
          </p>
          <p>
            By the Grace of God there will be opportunity to support our
            missionaries through prayer and giving
          </p>
          <div className="flex gap-4 justify-center mt-10">
            <span>
              <Image
                className="shadow-xl p-2 border-radius rounded-lg"
                src={"/./image/donations-picture.jpg"}
                width={229}
                height={0}
                alt="donations"
              />
            </span>
            <span>
              <Image
                className="shadow-xl p-2 border-radius rounded-lg"
                src={"/./image/bible-picture.jpg"}
                width={229}
                height={0}
                alt="donations"
              />
            </span>
            <span>
              <Image
                className="shadow-xl p-2 border-radius rounded-lg"
                src={"/./image/funds-backky.jpg"}
                width={229}
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
