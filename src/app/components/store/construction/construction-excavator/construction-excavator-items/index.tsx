import Button from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ConstructionExcavatorItem() {
  return (
    <section className="layout-spacing mt-9">
      <div className="custom-container">
        <h2 className="font-bold mb-9">Models</h2>
        <div className="grid md:grid-cols-4 gap-y-8 mb-10">
          <div className=" border-2 hover:shadow-xl  space-y-4">
            <h6 className="ttext-center mt-6 px-3">Mini Excavator</h6>
            <h4 className="px-3 font-semibold">300.9D</h4>
            <div>
              <span>
                <Image
                  src={"/image/Mini Excavator 300.9D.jpg"}
                  alt="Image of a Mini Excavator 300.9D.jpg"
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power
                </p>
                <p className=" font-semibold text-sm">13 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">2061 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Dig Depth
                </p>
                <p className=" font-semibold text-sm">68 in</p>
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
          <div className=" border-2 hover:shadow-xl  space-y-4">
            <h6 className="ttext-center mt-6 px-3">Mini Excavator</h6>
            <h4 className="px-3 font-semibold">300.9D VPS & HPU300</h4>
            <div>
              <span>
                <Image
                  src={"/image/mini excavator 300.9D VPS & HPU300.jpg"}
                  alt="Image of a mini excavator 300.9D VPS & HPU300"
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power
                </p>
                <p className=" font-semibold text-sm">13 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">2399 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Dig Depth
                </p>
                <p className=" font-semibold text-sm">68 in</p>
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
          <div className=" border-2 hover:shadow-xl md:w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Mini Excavator</h6>
            <h4 className="px-3 font-semibold">301.5</h4>
            <div>
              <span>
                <Image
                  src={"/image/mini excavator 301.5.jpg"}
                  alt="Image of a mini excavator 301.5."
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power
                </p>
                <p className=" font-semibold text-sm">21 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">3913 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Dig Depth
                </p>
                <p className=" font-semibold text-sm">100 in</p>
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
          <div className=" border-2 hover:shadow-xl w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Small Excavator</h6>
            <h4 className="px-3 font-semibold">313 GC - Tier 4 / Stage V</h4>
            <div>
              <span>
                <Image
                  src={"/image/small excavator 313gc-.jpg"}
                  alt="Image of a small excavator 313gc-."
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power - ISO 9249
                </p>
                <p className=" font-semibold text-sm">73 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">30400 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Maximum Digging Depth
                </p>
                <p className=" font-semibold text-sm">19.8 ft</p>
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
          <div className=" border-2 hover:shadow-xl w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Small Excavator</h6>
            <h4 className="px-3 font-semibold">313</h4>
            <div>
              <span>
                <Image
                  src={"/image/small excavator 313.jpg"}
                  alt="Image of a small excavator 313."
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power - ISO 9249
                </p>
                <p className=" font-semibold text-sm">108 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">30400 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Maximum Digging Depth
                </p>
                <p className=" font-semibold text-sm">19.8 ft</p>
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
          <div className=" border-2 hover:shadow-xl w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Small Excavator</h6>
            <h4 className="px-3 font-semibold">315 GC</h4>
            <div>
              <span>
                <Image
                  src={"/image/small excavator 315gc.jpg"}
                  alt="Image of a small excavator 315gc."
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power - ISO 9249
                </p>
                <p className=" font-semibold text-sm">98 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">34000 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Maximum Digging Depth
                </p>
                <p className=" font-semibold text-sm">19.6 ft</p>
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
          <div className=" border-2 hover:shadow-xl w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Meduim Excavator</h6>
            <h4 className="px-3 font-semibold">320 GC - Tier 4 / Stage V</h4>
            <div>
              <span>
                <Image
                  src={"/image/meduim excavator 320gc-tier 4.jpg"}
                  alt="Image of a meduim excavator 320gc-tier 4."
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power - ISO 9249
                </p>
                <p className=" font-semibold text-sm">146 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">48500 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Maximum Digging Depth
                </p>
                <p className=" font-semibold text-sm">22 ft</p>
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
          <div className=" border-2 hover:shadow-xl w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Medium Excavator</h6>
            <h4 className="px-3 font-semibold">320 - Tier 4 / Stage V</h4>
            <div>
              <span>
                <Image
                  src={"/image/small excavator 315gc.jpg"}
                  alt="Image of a small excavator 315gc."
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power - ISO 9249
                </p>
                <p className=" font-semibold text-sm">172 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">49800 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Maximum Digging Depth
                </p>
                <p className=" font-semibold text-sm">22 ft</p>
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
          <div className=" border-2 hover:shadow-xl w-64 space-y-4">
            <h6 className="ttext-center mt-6 px-3">Medium Excavator</h6>
            <h4 className="px-3 font-semibold">320 - Tier 4 / Stage V</h4>
            <div>
              <span>
                <Image
                  src={"/image/medium excavator 320-tier 4.jpg"}
                  alt="Image of a medium excavator 320-tier 4.jpg"
                  width={290}
                  height={30}
                />
              </span>
              <div className="px-3">
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Net Power - ISO 9249
                </p>
                <p className=" font-semibold text-sm">172 HP</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Operating Weight
                </p>
                <p className=" font-semibold text-sm">49800 lb</p>
                <p className="text-[#6f6f6f] text-left text-xs font-semibold">
                  Maximum Digging Depth
                </p>
                <p className=" font-semibold text-sm">22 ft</p>
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
      </div>
    </section>
  );
}
