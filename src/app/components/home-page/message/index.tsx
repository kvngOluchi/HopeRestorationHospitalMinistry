import ReadMore from "@/ui/read-more";
import React from "react";

export default function Message() {
  const str =
    "  Be careful, there are false prophets going about deceiving and manipulating people with the name of God and performing fake miracles. They coerce people to lie by giving false  testimonies that do not glorify God. They are evil and don’t have the Spirit of God. You shall know them by their works and false teaching. Brothers and Sisters, healing is the children’s bread and not for  the dogs. It is the will of God that you should enjoy divine health. Whatsoever you shall ask in the name of Jesus Christ believing and not doubt, the Father will give it to you, that is the word of God. He had made provisions for our healing on the Cross of Calvary. By his stripes we are healed and by the washing of his blood we are made whole. There is no sickness that is too hard for God to heal be it cancer, stroke, diabetes, high blood pressure, HIV/AIDS, the dead raised back to life. He forgives all our iniquities, and heals all our diseases. Ps.103:3.   Friend, that case that has defied medical treatments, you have gone to many hospitals and spiritual houses without solutions, why not try Jesus Christ, the great physician that you do not know. Today, if you humble yourself and come to him, you shall be healed. I believe in him, I boast in his name, and he can never put me to shame. God cannot lie and can never deny his word. He is real and he is alive.  ";
  return (
    <section className="layout-spacing mt-20 px-10">
      <div className="custom-container mb-20 ">
        <div className=" text-center font-bold text-2xl">
          <h2 className="mt-20">HELPING THE LEPERS TO SURVIVE</h2>
          <div className="w-12 h-1 bg-[#423e73] m-auto mb-5"></div>
        </div>
        <p className="">
          HEALING   Go ye into all the world, and preach the gospel to every
          creature, they shall lay hands on the sick, and they shall recover.
          Jesus of Nazareth with the Holy Ghost and with power; who went about
          doing good, and healing all that were oppressed of the devil; for God
          was with him. Mark 16:15,18. Acts 10:38. KJV.   The people believed in
          Jesus Christ and his Apostles, and they brought their sick folks and
          they were all healed. Acts 15:30. To obtain help from Jesus, you must
          come to him by faith.   Jesus raised the dead, delivered the demon
          possessed, healed the deaf and dumb, lepers, blind, lame, and divers
          sicknesses and diseases, all came to him because they believed in him.
          They brought forth the sick into the streets that at the least the
          shadow of Peter passing by might overshadow some of them. Acts 5:16.
          What a faith!   Healing is good but the greatest miracle ever known to
          man is the conversion of a perishing soul through the power of the
          gospel. Jesus went about teaching, preaching, and healing all
          sicknesses. Matthew 4:23. As we preach the gospel in obedience to
          God’s command, the power and the glory is released to heal the sick as
          promised.   We should desist from anything that gives room to the
          devil and his cohorts to mock God and harden the hearts of people to
          believe that healing is a scam. Divine healing is real in the New
          Testament church. If a genuine cripple is healed, you don’t need to
          tell him to check himself if he is healed, he will run and jump like
          the cripple at the temple’s gate that Peter healed. Raw miracles are
          still happening today through the name of Jesus Christ.   By the
          leading of the Holy Spirit and the anointing of God upon your life,
          lay hands on the sick and they shall recover from their infirmities
          and God’s name is glorified.
        </p>
        <ReadMore text={str} />
      </div>
    </section>
  );
}
