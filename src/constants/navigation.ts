import { title } from "process";

export const NAVIGATION_SCHEMA = [
  { title: "Home", url: "/", matcher: ["/"] },
  {
    title: "Mission",
    url: "/Mission",
    matcher: ["/Mission"],
    // sublinks:[
    //   {title: "Mission", url:"/Mission"},
    // ]
  },
  {
    title: "About Us",
    url: "/About-Us",
    // subLinks: [
    //   { title: "sublink", url: "/" },
    //   { title: "sublink", url: "/" },
    // ],
    matcher: ["/About-Us"],
  },

  { title: "Contact us", url: "/Contact-Us", matcher: ["/Contact-Us"] },
  { title: "Tracts", url: "/Tracts", matcher: ["/Tracts"] },
];
