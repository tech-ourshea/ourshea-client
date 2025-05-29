import { generateMeta } from "meta/gen-meta";
import React from "react";
import WhoWeAre from "~/components/who-we-are/who-we-are";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - About Us",
      description:
        "Learn about OurShea’s mission to empower women and promote sustainable Shea butter production.",
      path: "/about",
      imageName: "about.png",
    }),
  ];
}

const AboutUs = () => {
  return <WhoWeAre />;
};

export default AboutUs;
