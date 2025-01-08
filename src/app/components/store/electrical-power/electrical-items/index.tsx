import React from 'react'
import Image from 'next/image';
import Button from '@/ui/button';
import Link from 'next/link';

export default function ElectricalPowerItems() {
  return (
    <section className="layout-spacing mt-28">
      <div className="custom-container">
        <div className=" text-center font-bold">
          <h2 className="mt-20 font-medium text-2xl">Shop Now</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <div className="grid md:grid-cols-4 m-auto gap-8">
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Energy Time Shift( ETS ) Module
            </p>
            <span className="">
              <Image
                src={"/./image/Energy Time Shift(ETS).jpg"}
                alt="Picture of a Energy Time Shift(ETS)"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Application
              </p>
              <p className=" font-semibold text-sm">Peak shaving</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Module Type
              </p>
              <p className=" font-semibold text-sm">Energy Time Shift</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Name Plate Power
              </p>
              <p className=" font-semibold text-sm">570 KW | 1000KW</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              XQ35 Tier 4 Final
            </p>
            <span className="">
              <Image
                src={"/./image/XQ35 Tier 4 Final.jpg"}
                alt="Picture of a XQ35 Tier 4 Final"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Rating Prime
              </p>
              <p className=" font-semibold text-sm">27 ekW (35 kVA)</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Voltage
              </p>
              <p className=" font-semibold text-sm">120 - 600 V</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Frequency
              </p>
              <p className=" font-semibold text-sm">60 Hz</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-24"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              XQ60 Tier 4 Final
            </p>
            <span className="">
              <Image
                src={"/./image/XQ60 Tier 4 Final.jpg"}
                alt="Picture of a XQ60 Tier 4 Final"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Rating Prime
              </p>
              <p className=" font-semibold text-sm">47.5 ekW (60 kVA)</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Voltage
              </p>
              <p className=" font-semibold text-sm">120 - 600 V</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Frequency
              </p>
              <p className=" font-semibold text-sm">60 Hz</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-24"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">XQP 115</p>
            <span className="">
              <Image
                src={"/./image/XQP 115.jpg"}
                alt="Picture of a XQP 115"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Rating Prime
              </p>
              <p className=" font-semibold text-sm">115 kVA</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Voltage
              </p>
              <p className=" font-semibold text-sm"> 220 - 480 V</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Frequency
              </p>
              <p className=" font-semibold text-sm">50 | 60Hz</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-24"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">XQP20</p>
            <span className="">
              <Image
                src={"/./image/XQP20.jpg"}
                alt="Picture of a XQP20"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Rating Prime
              </p>
              <p className=" font-semibold text-sm">20 kVA</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Voltage
              </p>
              <p className=" font-semibold text-sm">220 - 415 V</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Frequency
              </p>
              <p className=" font-semibold text-sm">50 Hz</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-24"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">XQP30</p>
            <span className="">
              <Image
                src={"/./image/XQP30.jpg"}
                alt="Picture of a XQP30"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Rating Prime
              </p>
              <p className=" font-semibold text-sm">30 kVa</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Voltage
              </p>
              <p className=" font-semibold text-sm">127 - 480 V</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Frequency
              </p>
              <p className=" font-semibold text-sm">50/60 Hz</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-24"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Energy Time Shift( ETS ) Module
            </p>
            <span className="">
              <Image
                src={"/./image/Energy Time Shift(ETS).jpg"}
                alt="Picture of a Energy Time Shift(ETS)"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Application
              </p>
              <p className=" font-semibold text-sm">Peak shaving</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Module Type
              </p>
              <p className=" font-semibold text-sm">Energy Time Shift</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Name Plate Power
              </p>
              <p className=" font-semibold text-sm">570 KW | 1000KW</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-24"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
