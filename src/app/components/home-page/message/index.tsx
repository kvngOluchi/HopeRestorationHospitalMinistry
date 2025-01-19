import ReadMore from "@/ui/read-more";
import React from "react";

export default function Message() {
  return (
    <section className="layout-spacing mt-20 px-10">
      <div className="custom-container mb-20 ">
        <div className=" text-center font-bold text-2xl">
          <h2 className="mt-20">HELPING THE LEPERS TO SURVIVE</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <p className="">
          Leprosy is a deadly disease that no one wants to associate with the
          patients. Lepers are normal human beings that need help and love, but
          who remembers them? They are treated as outcasts, separated from the
          society and their loved ones. Hope Restoration Hospital Ministry
          visits their colonies to identify with them. We present food items,
          clothing, and essential medicines. Above all, we present the gospel of
          Jesus Christ to them. I must testify that they are lovely people and
          always happy to receive visitors.
        </p>
        <p className="py-3">
          {" "}
          The following are few things to note about leprosy disease: .
        </p>
        <p className="py-3">Medical Care </p>
        <ul>
          <li className="py-3">
            1. Wound care and dressing: Many leprosy patients require regular
            wound care and dressing to prevent infection and promote healing.
          </li>
          <li className="py-3">
            2. Physiotherapy and rehabilitation: Leprosy can cause nerve damage,
            leading to disability and disfigurement. Physiotherapy and
            rehabilitation can help patients regain mobility and independence.
          </li>
          <li className="py-3">
            {" "}
            3. Eye care: Leprosy can cause eye problems, including blindness.
            Regular eye exams and treatment can help prevent these complications
          </li>
        </ul>
        <p className="py-3">Education and Awareness</p>
        <ul>
          <li className="py-3">
            1. Leprosy education and awareness: Many people still believe that
            leprosy is contagious and incurable. Education and awareness
            programs can help dispel these myths and reduce stigma.{" "}
          </li>
          <li className="py-3">
            2. Literacy programs: Many leprosy patients have limited access to
            education. Literacy programs can help them learn to read and write.
          </li>
        </ul>
        <p className="py-3">Social and Economic Support</p>
        <ul>
          <li className="py-3">
            1. Food and nutrition support: Leprosy patients often struggle to
            access nutritious food, leading to malnutrition and related health
            problems.{" "}
          </li>
          <li className="py-3">
            2. Shelter and housing support: Many leprosy colonies lack adequate
            housing and sanitation facilities. Support for shelter and housing
            can help improve living conditions.{" "}
          </li>
          <li className="py-3">
            3. Microfinance and livelihood support: Leprosy patients often
            struggle to access employment and economic opportunities.
            Microfinance and livelihood support can help them start small
            businesses and improve their economic situation.
          </li>
        </ul>
        <p className="py-3"> Emotional and Psychological Support</p>
        <ul>
          <li className="py-3">
            1. Counseling and mental health support: Leprosy patients often
            experience stigma, discrimination, and emotional distress.
            Counseling and mental health support can help them cope with these
            challenges.{" "}
          </li>
          <li className="py-3">
            2. Social support and community building: Leprosy patients often
            feel isolated and disconnected from their communities. Social
            support and community building programs can help them build
            relationships and connections.
          </li>
        </ul>
      </div>
    </section>
  );
}
