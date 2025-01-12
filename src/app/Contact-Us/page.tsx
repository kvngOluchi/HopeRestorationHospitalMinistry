import React from "react";
import ContactUsDefinition from "../components/contact-us/contact-us-hero";
import ContactDet from "../components/contact-us/contact-det";
import { main } from "framer-motion/client";
import ContactUsHero from "../components/contact-us/contact-us-hero";

export default function page() {
  return (
    <main>
      <ContactUsHero />
      <ContactDet />
    </main>
  );
}
