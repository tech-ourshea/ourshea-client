import React from "react";
import Contacts from "~/components/contacts/contacts";
import type { Route } from "../+types/root";
import { generateMeta } from "meta/gen-meta";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - Contact Us",
      description:
        "Reach out to OurShea for inquiries, partnerships, or feedback.",
      path: "/contact",
      imageName: "contact.png",
    }),
  ];
}

const ContactUs = () => {
  return <Contacts />;
};

export default ContactUs;
