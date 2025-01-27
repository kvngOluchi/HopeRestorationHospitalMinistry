import React from "react";

export default function BoardOfTrustee() {
  return (
    <section className="layout-spacing p-5">
      <div className="custom-container">
        <div className="md:grid grid-cols-[1fr_1fr]">
          <div>
            <h1 className="bg-[#423e73] text-white text-center font-bold text-xl">
              THE BOARD OF TRUSTEES{" "}
            </h1>
            <ul className="list-disc list-style-type">
              <li>Evangelist Charles D. Onwubolu, RN, MSc- President</li>
              <li>Prince Obaro Omeru - Secretary</li>
              <li>DR. Isaac Osajele</li>
              <li>DR. Okuchukwu Onwubolu</li>
              <li>DR. Raph Onyemekeiha</li>
              <li>Mrs. Peace Ironkwe, RN</li>
              <li>DR. James Kpolugbo</li>
            </ul>
          </div>
          <div>
            <h1 className="bg-[#423e73] text-white text-center font-bold text-xl">
              THE COUNCIL MEMBERS{" "}
            </h1>
            <ul className="list-disc list-style-type">
              <li>Evangelist Cahrles D. Onwubolu - President</li>
              <li>Pastor Olanrewaju Daniel - Secretary</li>
              <li>Mrs. Obichukwu Omeru - Treasurer</li>
              <li>Mrs. Veronica Onwubolu - Member</li>
              <li>DR. Okuchukwu Onwubolu - Member</li>
              <li>Mrs. Ogechukwu Nwachukwu - Member</li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-[1fr_1fr]">
          <div>
            <h1 className="bg-[#423e73] text-white text-center font-bold text-xl">
              MEMBERSHIP{" "}
            </h1>
            <p>
              Membership is open to all Christians and mainly volunteers from
              health workers.
            </p>
          </div>
          <div>
            <h1 className="bg-[#423e73] text-white text-center font-bold text-xl">
              SPECIAL APPEAL FOR SUPPORT{" "}
            </h1>
            <p>
              {" "}
              We are constrained to inform you that we have no congregation to
              raise fund to meet with our budgets. We need financial and
              material support from concerened individuals and organizations. We
              rely on you to help the poor and hurting in our society
            </p>
            <p className="text-[#ff0000]">
              Wise men invest in the work of soul winning!!
            </p>
            <p className="text-xl bg-[#423e73] text-white mt-5">
              Our Banker: Zenith Bank PLC. A/C 1011350267
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
