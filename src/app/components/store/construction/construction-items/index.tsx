import React from 'react'
import Image from 'next/image';
import Button from '@/ui/button';
import Link from 'next/link';

export default function ConstructionEquipments() {
  return (
    <section className="layout-spacing mt-28">
      <div className="custom-container">
        <div className=" text-center font-bold">
          <h2 className="mt-20 font-medium text-2xl">Shop Now</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <div className="grid md:grid-cols-4 m-auto gap-6 mb-10">
          <Link href={"/Store/Construction/Construction-Excavator"}>
            <div className=" border-2  hover:shadow-xl">
              <span className="">
                <Image
                  src={"/./image/Excavators.jpg"}
                  alt="Picture of a Excavators"
                  width={310}
                  height={250}
                />
                <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
              </span>
              <p className="text-center font-semibold">Excavators</p>
            </div>
          </Link>
          <Link href={"/Store/Construction/Construction-Drill"}>
            <div className=" border-2  hover:shadow-xl">
              <span className="">
                <Image
                  src={"/./image/drill.jpg"}
                  alt="Picture of a Drills"
                  width={310}
                  height={250}
                />
                <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
              </span>
              <p className="text-center font-semibold">Drill</p>
            </div>
          </Link>
          <Link href={"/Store/Construction/Construction-Asphat-Paver"}>
            <div className=" border-2  hover:shadow-xl">
              <span className="">
                <Image
                  src={"/./image/Asphat Paver.jpg"}
                  alt="Picture of a Asphat Paver."
                  width={310}
                  height={250}
                />
                <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
              </span>
              <p className="text-center font-semibold">Asphat Paver</p>
            </div>
          </Link>
          <Link href={"/Store/Construction/Construction-Road-Reclaimers"}>
            <div className=" border-2  hover:shadow-xl">
              <span className="">
                <Image
                  src={"/./image/Road Reclaimers.jpg"}
                  alt="Picture of a Road Reclaimers"
                  width={310}
                  height={250}
                />
                <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
              </span>
              <p className="text-center font-semibold">Road Reclaimers</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
