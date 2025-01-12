import { Icon, ICONS } from "@/ui";
import Image from "next/image";
import React from "react";

export default function OurMission() {
  return (
    <section className="layout-spacing pt-5 px-5">
      <div className="custom-container">
        <div className="flex">
          {" "}
          <h2 className="font-bold text-xl">Our Mission </h2>
          <Icon type={ICONS.round_tick_icon} size={20} color="#FFFFFF"></Icon>
        </div>
        <div className="w-10 h-1 bg-[#234f21]"></div>
        <div className="md:grid grid-cols-[1fr_1fr] mt-5 mb-5">
          <div>
            <p className="text-[#234f21] mb-2 text-lg font-bold">
              How We Help: Medical
            </p>
            <p>
              The Ministry is actively involved inRural Medical Outreach to
              reach the less privileged people in remote villages where they
              have no access to medical facilities. During the outreach, the
              ministry gives health talks on prevention and control of deadly
              diseases and also offers free medical treatment to community
              participants. We appeal to concerened individuals and
              organisations to donate essential drugs, hospital
              equipment/material, etc, to enhance successful programmes. We
              support medical missionaries like doctors, nurses etc undergoing
              training in mission schools and those in mission field. We operate
              Community Mission Health Centers to cater for the sick and as a
              means of reaching souls in such communities. We visit Leprosy
              Colonies to share the love of Christ, also with essential drugs
              and food items.
            </p>
          </div>
          <span className="shadow-xl">
            <Image
              className="shadow-xl p-4 border-radius rounded-2xl"
              src={"/Image/IMG-20250106-WA0002.png"}
              height={120}
              width={710}
              alt="Hero Background Image"
            />
          </span>
        </div>
        <div className="md:grid grid-cols-[1fr_1fr] mt-5 mb-5">
          <span className="shadow-xl">
            <Image
              className="shadow-xl p-4 border-radius rounded-2xl"
              src={"/Image/africanimage.png"}
              height={120}
              width={710}
              alt="Hero Background Image"
            />
          </span>
          <div className="p-5">
            <p className="text-[#234f21] mb-2 text-lg font-bold mt-5">
              Hospital Relief Fund
            </p>
            <p>
              The ministry recognizes the fact that many people are suffering
              physically and spiritaully. Therefore, we deem it most appropriate
              to operate a fund to offeer free medical and financial assistance
              to the poor and the needy. Specifically, we assist in settlement
              of hospital bills for abandoned patients, orphanage homes and
              rehabilitation of drug addicts. We ancourage you to donate
              generously to this humanitarian fund. The Bible says, "He that
              hath mercy on the poor shall not lack" Prov. 19:17; 28:27.
            </p>
          </div>
          <div className="p-5">
            <p className="text-[#234f21] mb-2 text-lg font-bold mt-5">
              Evangelism
            </p>
            <p>
              The ministry is faithfully committed to hospital envangelism with
              the aid of effective distribution of Hospital Tracts through
              individuals, churches, and Christain bodies in different hospitals
              to reach the patients and the hospitals workers. We also organise
              swminars for health care Christain Fellowship HCF, NIFES,
              Christain Union etc. in several hospitals/ schools where we create
              awareness of opportunities available to christain health workers
              to inister tot heir numerous hopeless and dying patients
            </p>
          </div>
          <span className="shadow-xl">
            <Image
              className="shadow-xl p-4 border-radius rounded-2xl"
              src={"/Image/envangelism.png"}
              height={120}
              width={710}
              alt="Hero Background Image"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
