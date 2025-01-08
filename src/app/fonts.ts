import { Montserrat, Poppins, Prociono } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const prociono = Prociono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
