import Logo from "public/logo";
import { NavLink, type NavLinkRenderProps } from "react-router";
import { IconChevronDown } from "../ui/icons/chevron-down";
import { useState } from "react";
import products from "../../utils/products.json";

const aboutUsDropdownData: DropDownProps = {
  name: "About Us",
  to: "/about-us/who-we-are",
  options: [
    {
      name: "Who We Are",
      to: "/about-us/who-we-are",
    },

    {
      name: "Our Team",
      to: "/about-us/our-team",
    },

    {
      name: "Board of Directors",
      to: "/about-us/board-of-directors",
    },
  ],
};

const productsDropdownData: DropDownProps = {
  name: "Our Products",
  to: "/about-us/who-we-are",
  options: products.map((prod) => {
    return { name: prod.name, to: prod.url };
  }),
  //         [
  //     {
  //       name: "Handcrafted Soap",
  //       to: "/products/handcrafted-soap",
  //     },

  //     {
  //       name: "Bulk shea butter",
  //       to: "/products/shea-butter",
  //     },

  //     {
  //       name: "Smokeless charcoal",
  //       to: "/products/smokeless-charcoal",
  //     },
  //   ],
};
const Menubar = () => {
  return (
    <div className="flex justify-between items-center px-20 pt-4">
      <Logo />
      <nav className="flex items-center gap-8">
        <NavItem to="">Home</NavItem>
        <DropDown {...aboutUsDropdownData} />
        <DropDown {...productsDropdownData} />
        <NavItem to="gallery">Gallery</NavItem>
        <NavLink
          className="bg-primary-900 hover:bg-primary-700 px-6 py-1.5 rounded-4xl text-white"
          to="contact-us"
        >
          Contact us
        </NavLink>
      </nav>
    </div>
  );
};

interface DropDownProps {
  name: string;
  to: string;
  options: { name: string; to: string }[];
}
const DropDown = (props: DropDownProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      className="hover:ul:block z-1000 relative"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavItem to={props.to} className="flex items-center gap-1" border={false}>
        <span>{props.name}</span>
        <IconChevronDown />
      </NavItem>
      {showMenu && (
        <ul className="absolute flex flex-col gap-3.5 bg-primary-100/90 px-3.5 py-5 w-36 text-xs">
          {props.options.map((option, indx) => {
            return (
              <NavItem
                key={indx}
                border={false}
                to={option.to}
                className="border-b-0 hover:border-b-0 hover:text-primary-900"
              >
                {option.name}
              </NavItem>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const NavItem = ({
  children,
  to,
  className,
  border,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
  border?: boolean;
}) => {
  if (border === undefined) border = true;

  const getNavClass = (state: NavLinkRenderProps) => {
    return [
      "px-2",
      border ? "border-b-4 border-primary-900" : "",
      state.isActive && border
        ? "border-primary-900 hover:border-primary-900"
        : "border-transparent",
      !state.isActive && border ? "hover:border-primary-600" : "",
      className,
    ].join(" ");
  };

  return (
    <NavLink to={to} className={(props) => getNavClass(props)}>
      {children}
    </NavLink>
  );
};

export default Menubar;
