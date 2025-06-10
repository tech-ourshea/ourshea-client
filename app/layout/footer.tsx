import Logo from "public/logo";
import { Link, NavLink } from "react-router";
import IconFacebook from "~/components/ui/icons/icon-facebook";
import IconInstagram from "~/components/ui/icons/icon-instagram";
import IconLinkedin from "~/components/ui/icons/icon-linkedin";
import IconYoutube from "~/components/ui/icons/icon-youtube";
import Products from "../utils/products.json";

const Footer = () => {
  return (
    <footer className="lg:block flex flex-col items-center mb-10 px-16 lg:px-52 pb-2 border-b-[1px]">
      <ul className="flex flex-col lg:justify-center lg:gap-24 lg:grid lg:grid-cols-[410px_202px_202px] lg:text-left text-center">
        <li className="lg:block flex flex-col items-center lg:w-auto">
          <Logo className="w-40 h-23" />
          <p className="mt-6 max-w-[400px]">
            We create jobs, support women, and protect the environment
          </p>

          <nav className="flex gap-5 mt-5">
            <Link
              target="_blanc"
              to="https://www.facebook.com/profile.php?id=61576897994193"
              className="flex justify-center items-center border-[1px] border-primary-900 rounded-full w-10 h-10"
            >
              <IconFacebook />
            </Link>
            <Link
              target="_blanc"
              to="http://www.linkedin.com"
              className="flex justify-center items-center border-[1px] border-primary-900 rounded-full w-10 h-10"
            >
              <IconLinkedin />
            </Link>
            <Link
              target="_blanc"
              to="https://www.instagram.com/oursheaghltd/"
              className="flex justify-center items-center border-[1px] border-primary-900 rounded-full w-10 h-10"
            >
              <IconInstagram />
            </Link>
            <Link
              target="_blanc"
              to="https://www.youtube.com/@OurSheaGhanaLtd"
              className="flex justify-center items-center border-[1px] border-primary-900 rounded-full w-10 h-10"
            >
              <IconYoutube />
            </Link>
          </nav>
          <p className="mt-4 text-primary-900">
            Mon – Sat: 8:00 am – 5:00 pm GMT
          </p>
        </li>

        <LinkGroup heading="Our Products" options={productsLinks} />

        <LinkGroup heading="Quick Links" options={quickLinks} />
      </ul>
      <p className="mt-20 mb-2 text-center">
        Copyright 2025. All right Reserved
      </p>
    </footer>
  );
};

type LinkGroupOption = { name: string; to: string };

type LinkGroupProps = {
  heading: string;
  options: LinkGroupOption[];
};

const LinkGroup = ({ heading, options }: LinkGroupProps) => {
  return (
    <li>
      <h3 className="mt-11 mb-10">{heading}</h3>
      <nav className="flex flex-col gap-5">
        {options.map((option, indx) => {
          return (
            <NavLink
              key={indx}
              className="hover:text-primary-900 cursor-pointer"
              to={option.to}
            >
              {option.name}
            </NavLink>
          );
        })}
      </nav>
    </li>
  );
};

const quickLinks: LinkGroupOption[] = [
  { to: "/", name: "Home" },
  { to: "/about-us/who-we-are", name: "Who We Are" },
  { to: "/contact-us", name: "Contact Us" },
];

const productsLinks: LinkGroupOption[] = Products.map((prod) => {
  return { name: prod.name, to: prod.url };
});


export default Footer;
