import React from 'react'
import Image from 'next/image';
import Button from '@/ui/button';
import Link from 'next/link';

export default function MarineEngineItems() {
  return (
    <section className="layout-spacing mt-28">
      <div className="custom-container">
        <div className=" text-center font-bold">
          <h2 className="mt-20 font-medium text-2xl">Shop Now</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <div className="grid md:grid-cols-4 m-auto gap-8">
          <div className=" border-2  hover:shadow-xl w-64 max-h-full">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">C12</p>
            <span className="">
              <Image
                src={"/./image/commercial c12.jpg"}
                alt="Picture of a industrial diesel C0.1.jpg"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                340-490 bhp (254-366 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1800-2300 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">IMO I, IMO II</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64 max-h-full">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">C32 Tier 3 / IMO II</p>
            <span className="">
              <Image
                src={"/./image/commercial C32 Tier 3.jpg"}
                alt="Picture of a commercial C32 Tier 3"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                660-1600 bhp (492-1193 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1600-2300 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">
                U.S. EPA Tier 3 / IMO II emissions certified
              </p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-16 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">C32 Tier 4 / IMO III</p>
            <span className="">
              <Image
                src={"/./image/commercial C32 Tier 4.jpg"}
                alt="Picture of a commercial C32 Tier 4"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                6 Brick Z-Flow - Length
              </p>
              <p className=" font-semibold text-sm">147.7 in</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                1000-1450 bhp (746-1081 bKW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Minimum Length
              </p>
              <p className=" font-semibold text-sm">83.9 in</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">3512C IMO II</p>
            <span className="">
              <Image
                src={"/./image/commercial 3512C IMO II.jpg"}
                alt="Picture of a commercial 3512C IMO II"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                1280-2551 bhp (955-1902 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1600 rpm, 1800 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">IMO II, EU IW</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">3512C Tier 3</p>
            <span className="">
              <Image
                src={"/./image/commercial 3512C Tier 3.jpg"}
                alt="Picture of a commercial 3512C Tier 3"
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                1340-2366 bhp (1000-1765 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1600-1800 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">EPA Tier 3, IMO II</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">3512E Tier 4 / IMO III</p>
            <span className="">
              <Image
                src={"/./image/commercial 3512E Tier 4.jpg"}
                alt="Picture of a commercial 3512E Tier 4."
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                1341-2549 bhp (1000-1901 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1600-1800 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">
                U.S. EPA Tier 4 Final, IMO III
              </p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">3516C IMO II</p>
            <span className="">
              <Image
                src={"/./image/commercial 3516C IMO II.jpg"}
                alt="Picture of a commercial 3516C IMO II.."
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                1650-3386 bhp (1230-2525 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1200-1800 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">IMO II</p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
              >
                VIEW QUOTE
              </Button>
            </Link>
          </div>
          <div className=" border-2  hover:shadow-xl w-64">
            <p className="text-center mt-10 font-semibold px-9">
              Commercial Propulsion Engines
            </p>
            <p className=" px-3">3516E Tier 4 / IMO III</p>
            <span className="">
              <Image
                src={"/./image/commercial 3516E Tier 4.jpg"}
                alt="Picture of a commercial 3516E Tier 4."
                width={280}
                height={20}
              />
            </span>

            <div className=" px-3">
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Power Range
              </p>
              <p className=" font-semibold text-sm">
                2501-3386 bhp (1865-2525 bkW)
              </p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Speed Range
              </p>
              <p className=" font-semibold text-sm">1600-1800 rpm</p>
              <p className=" text-[#6f6f6f] text-left text-xs font-semibold">
                Emissions
              </p>
              <p className=" font-semibold text-sm">
                U.S. EPA Tier 4 Final, IMO III
              </p>
            </div>
            <Link rel="stylesheet" href="/" className=" pt-9">
              <Button
                variant="filled-blue"
                className="m-auto px-8 py-2 border-0 mt-20 hover:bg-[#6661ac]"
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
