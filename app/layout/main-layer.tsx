import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";
import TagLine from "~/components/layout/tag-line";

const MainLayer = () => {
  return (
    <div>
      <Header />
      <div className="bg-[url(/images/gen-bg-img.png)]">
        <Outlet />
      </div>
      <TagLine />
      <Footer />
    </div>
  );
};

export default MainLayer;
