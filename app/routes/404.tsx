import { Link } from "react-router";
import { ArrowRight } from "~/components/ui/icons/icon-arrow-right";
import Footer from "~/layout/footer";
import Header from "~/layout/header";
import type { Route } from "../+types/root";
import { generateMeta } from "meta/gen-meta";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - 404",
      description: "Page not found.",
      path: "/404",
      imageName: "404.png",
    }),
  ];
}

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div className="bg-[url(/images/gen-bg-img.png)]">
        <div className="relative w-full h-62">
          <img
            src="/images/page-not-found.png"
            alt="ourshea women making shea butter"
            className="w-full h-full object-cover"
          />
          <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
            <h2>404 Page</h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex justify-center items-center bg-primary-100/80 mt-25 w-25.75 h-7.5">
            404
          </p>
          <h4 className="mt-10 text-[40px]"> Oops! Page Not Found.</h4>
          <p className="mt-5 max-w-152 text-[16px] text-center">
            We couldn’t find the page you’re looking for. It might be moved or
            doesn’t exist anymore!
          </p>
          <Link
            to="/"
            className="flex justify-center items-center gap-8.25 bg-primary-100/80 mt-18.75 mb-10 w-75.75 h-12.5"
          >
            <p className="text-[16px]">Back to homepage</p>
            <ArrowRight className="bg-primary-900 w-8.75 h-7.5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
