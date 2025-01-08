import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MarineTypeArea() {
  return (
    <section className="layout-spacing">
      <div className="custom-container">
        <div className="grid md:grid-cols-4 mt-20 mb-9 gap-4">
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Marine-Power/Offshore"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/Offshore.jpg"}
                alt="Image of Offshore.jpg"
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Offshore</p>
            </Link>
          </div>
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Marine-Power/Marine-Engine"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/marine engine.jpg"}
                alt="Image of marine engine"
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Marine Engine</p>
            </Link>
          </div>
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Marine-Power/Marine-Dredge"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/marine dredge.jpg"}
                alt="Image of marine dredge."
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Marine Dredge</p>
            </Link>
          </div>
          <div className=" border-2 m-auto hover:shadow-xl">
            <Link
              href="/Store/Marine-Power/Tug"
              className="font-semibold space-y-6 text-lg "
            >
              <Image
                src={"/./Image/tug.jpg"}
                alt="Image of tug."
                width={275}
                height={250}
              />
              <p className=" pb-10 text-center">Tug</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
