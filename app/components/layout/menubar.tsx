import Logo from "public/logo";
import { Link, NavLink, type NavLinkRenderProps } from "react-router";
import { IconChevronDown } from "../ui/icons/chevron-down";
import { Fragment, useState, type MouseEvent } from "react";
import products from "../../utils/products.json";
import { IconMenu } from "../ui/icons/icon-menu";
import Modal from "../ui/modal";

const aboutUsDropdownData = {
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

const productsDropdownData = {
  name: "Our Products",
  to: "/about-us/who-we-are",
  options: products.map((prod) => {
    return { name: prod.name, to: prod.url };
  }),
};
const Menubar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const closeMenu = () => {
    setShowMobileMenu(false);
  };
  return (
    <Fragment>
      {showMobileMenu && (
        <Modal isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)}>
          <div className="flex flex-col items-end mr-5">
            <Link to="/">
              <Logo className="mt-10" />
            </Link>
            <nav className="flex flex-col items-end gap-2.5 mt-4">
              <Link to="">Home</Link>
              <MobileDropdown {...aboutUsDropdownData} onClose={closeMenu} />
              <MobileDropdown {...productsDropdownData} onClose={closeMenu} />
              <Link to="gallery">Gallery</Link>
              <Link to="contact-us">Contact us</Link>
            </nav>
          </div>
        </Modal>
      )}
      <div className="md:hidden flex justify-end mt-2.5">
        <IconMenu
          className="fill-primary-900 mr-5"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      <div className="hidden md:flex justify-between items-center px-20 pt-4">
        <Link to={"/"}>
          <Logo />
        </Link>
        <nav className="flex gap-8">
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
    </Fragment>
  );
};

interface DropDownProps {
  name: string;
  to: string;
  options: { name: string; to: string }[];
  onClose?: () => void;
}

const MobileDropdown = (props: DropDownProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShowMenu((prev) => !prev);
  };
  return (
    <div onClick={handleClick}>
      <p className="flex justify-end items-center gap-1">
        <span>{props.name}</span>
        <IconChevronDown />
      </p>
      {showMenu && (
        <ul className="flex flex-col items-end gap-1 mb-4">
          {props.options.map((option, indx) => {
            return (
              <Link
                onClick={() => {
                  props.onClose && props.onClose();
                }}
                key={indx}
                to={option.to}
                className="text-xs"
              >
                {option.name}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};


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
                className="border-b-0 hover:border-b-0 hover:font-bold hover:text-primary-1000"
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
