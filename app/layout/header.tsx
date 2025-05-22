import ContactsBanner from "~/components/layout/contacts";
import Menubar from "~/components/layout/menubar";

const Header = () => {
  return (
    <header>
      <ContactsBanner />
      <Menubar />
    </header>
  );
};

export default Header;
