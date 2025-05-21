import type { FooterData } from "./../types/Footer";

export const footerData: FooterData = {
  brand: {
    logo: "/Task4/Images/Footer/Logo.png", 
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  },
  sections: [
    {
      title: "Service",
      links: [
        { name: "Payment & Tax", path: "#" },
        { name: "Features", path: "#" },
        { name: "View Booking", path: "#" },
        { name: "Support", path: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About us", path: "#" },
        { name: "News", path: "#" },
        { name: "Pricing", path: "#" },
        { name: "New Property", path: "#" },
      ],
    },
  ],
  location: {
    title: "Our Location",
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  socialLinks: [
    { name: "/Task4/Images/Footer/facebook.png", path: "#" },
    { name: "/Task4/Images/Footer/twitter.png", path: "#" },
    { name: "/Task4/Images/Footer/linkedin.png", path: "#" },
  ],
  privacy: "Copyright 2024 flora. All Rights Reserved",
  privacyLink :[
    {name: "Terms & Conditions", path: ""},
    {name: "Privacy Policy", path: ""},
  ]

};
