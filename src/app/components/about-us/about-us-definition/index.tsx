import React from "react";
import Image from "next/image";
import ReadMore from "@/ui/read-more";

export default function AboutUsDefinition() {
  const str =
    " The Organization is committed to rendering timely services and creative optimal solutions to identified health needs of the poor and the needy in our society. The Ministry provides, subject to available resources, several physical and spiritual services through qualified Christian Medical Professionals.";
  return (
    <section className="layout-spacing">
      <div className="custom-container grid md:grid-cols-[1fr_1fr]">
        <div className="">
          <span>
            <Image
              className="shadow-xl p-4"
              src={"/Image/backyy.png"}
              width={390}
              height={0}
              alt="Hero Background Image"
            />
          </span>
          <div className="w-20 h-1 bg-[#423e73] m-auto mb-5 mt-5 me-40"></div>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-xl">About Organisation</h2>
          <div className="w-20 h-1 bg-[#423e73]  mb-3 "></div>
          <span className="font-bold text-[#423e73]">PREAMBLE: </span>
          <span className="mb-3">
            Hope Restoration Hospital Ministry Inc. is a government registered
            interdenominational Humanitarian Christian Organization made up of
            voluntary health workers. The Organization was inaugurated on
            Saturday, 20th August 1994 at the Assembly Hall of Federal
            Government College, Warri, Delta State, Nigeria.
          </span>
          <ReadMore text={str} />
          <span className="font-bold text-[#423e73] ">CORE VALUES: </span>
          <p className="font-bold">Mission:</p>
          <ul className="list-style-type list-disc bg-[#1c1d1d] text-white">
            <li>
              Servant Hood: Serving the physical and spiritual needs of others
            </li>
            <li>
              Cultural Sensitivity: Respecting local customs and tradtions
            </li>
            <li>
              Community Engagment: Building relationships and partnerships
            </li>
          </ul>
          <p className="font-bold">Spiritual:</p>
          <ul className="list-style-type list-disc bg-[#1c1d1d] text-white">
            <li>Compassion: Showing empathy and kindness to those in need.</li>
            <li>Faithfulness: Trusting in God's guidance and provision</li>
            <li>
              Humility: Serving the Body of Christ and the general public with
              humility
            </li>
          </ul>
          <p className="font-bold">Organisation:</p>
          <ul className="list-style-type list-disc bg-[#1c1d1d] text-white">
            <li>Stewardship: Managing resources effectively.</li>
            <li>Transparency: Demonstrating accountability and openness</li>
            <li>
              Collaboration: Partnering with other Organisation and stakeholders
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
