import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function StoreArea() {
  return (
    <section className="layout-spacing">
      <div className="custom-container">
        <div className="mt-16 space-y-1">
          <p className=" font-bold text-2xl ">
            STORE
          </p>
          <div className="w-10 h-1 bg-[#423e73] "></div>
        </div>
        <div className="mt-8">
          <p className=" font-normal">
            No single machine is perfect for every application or site
            condition. Whether you need loaders, dozers, excavators, scrapers or
            trucks, your TRUMarks system dealer can pull the right system
            together from the largest selection of equipment options on earth.
            One system is going to perform best on your next job, but only
            TruMarks systems can deliver on them all. You find the work. We’ll
            find the way then send it your way.
          </p>
        </div>
        <div className="grid md:grid-cols-4 mt-20 mb-9 gap-4">
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Construction"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/construction.jpg"}
                alt="Image of Construction Engineering"
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Construction</p>
            </Link>
          </div>
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Electrical-Power"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/electrical power.jpg"}
                alt="Image of Construction Engineering"
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Electrical Power</p>
            </Link>
          </div>
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Marine-Power"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/marine.jpg"}
                alt="Image of Marine Power"
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Marine Power</p>
            </Link>
          </div>
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Industrial-power"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/industrial power.jpg"}
                alt="Image of Indistrial Power"
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Industrial Power</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
