import React from "react";
import Image from "next/image";
import ReadMore from "@/ui/read-more";

export default function HowItStarted() {
  const str =
    " The Lord asked, if you were a christian, what could you have done? I responded, i could have preached to her and peradventure she could have accepted Christ as her Lord Saviour and possibly make it to heaven, And the Lord said, Go and do likewise. Immediately, the burden came on me to go and rescue multitudes of souls that are passing through the hospitals into eternal damnation on daily basis.This is the beginning of my calling into hospital Ministry and the first tract that i wrote titled I watched her die came from this encounter with the Lord";

  return (
    <section className="layout-spacing p-5">
      <div className="custom-container grid md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className=" font-bold text-xl">HOW IT STARTED</h2>
          <div className="w-20 h-1 bg-[#423e73] "></div>
          <p className="pt-1">
            I was admitted into College Of Nursing Science in April 1983 and
            graduated in June 1986. As a student and an unbeliever in 1984,
            there was a middle aged woman that was admitted into the Hospital
            ward with chronic cancer of the cervix and she later died after much
            battles to save her life.
          </p>
          <p className="pt-1">
            Barely a year after I graduated, I had an encounter with the Lord
            Jesus Christ on Saturday 11th April 1987 and became born again
            Christain during a revival meeting.
          </p>
          <p className="pt-1">
            In 1994 exactly 10years later after the death of the cancer patient
            in 1984, the Lord appeared to me in a dream. He asked me if I could
            still remember the woman that was admitted into the female Surgical
            Ward with terminal disease of cancer of the cervix. The picture of
            the woman appeared to me and i said yes, Lord. He said, I was aware
            of your emotional attachment to her and how you were always standing
            by her bedside wondering the kind of pains she was experiencing.
          </p>
          <ReadMore text={str} />
        </div>
        <span>
          <Image
            className="shadow-xl p-4"
            src={
              "/Image/long-straight-corridor-hospital-with-seats-doors-along-walls-no-people_933530-1936.png"
            }
            width={370}
            height={0}
            alt="Hero Background Image"
          />
        </span>
      </div>
    </section>
  );
}
