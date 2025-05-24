import products from "../../utils/products.json";
import { useState } from "react";
import { Link } from "react-router";
const heroImages = [
  "/images/landing-img.png",
  "/images/landing-img.png",
  "/images/landing-img.png",
];

const Hero = () => {
  const [currentImgIndx, setCurrentImgIndx] = useState<number>(0);

  return (
    <section className="border-primary-900 border-b-10">
      <div className="relative mt-7 h-147">
        <img
          className="z-10 absolute w-full h-full object-cover"
          src="/images/landing-img.png"
          alt="landing image"
        />

        <div className="z-20 absolute mt-47 w-full text-white text-center">
          <h1 className="m-auto max-w-218.25">
            We are an eco-conscious producer of premium organic shea butter.
          </h1>
          <p className="m-auto mt-7 max-w-183">
            From traditional methods to innovative agile practices, we blend
            heritage and technology to meet global demands of shea butter.
          </p>
        </div>

        <div className="bottom-0 left-1/2 z-20 absolute flex gap-2 mb-2 -translate-x-1/2 transform">
          {heroImages.map((img, indx) => {
            return (
              <div
                key={indx}
                onClick={() => {
                  setCurrentImgIndx(indx);
                }}
                className={`flex justify-center items-center border-[1px]  rounded-full w-4 h-4 cursor-pointer ${
                  currentImgIndx === indx
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                <div
                  className={` rounded-full w-2.5 h-2.5 ${
                    currentImgIndx === indx ? "bg-primary-900" : "bg-white"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center gap-60 px-20 py-16.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="fill-primary-900 w-6 h-12 cursor-pointer"
        >
          <path
            fill="none"
            className="stroke-primary-900"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="m15 19l-7-7l7-7"
          ></path>
        </svg>

        <div className="flex gap-25">
          {products.map((product, indx) => {
            return (
              <Link
                to={product.url}
                key={indx}
                className="flex flex-col justify-between"
              >
                <img
                  src={product.images.small}
                  alt={`OurShea-${product.name}`}
                  className="object-fill"
                />
                <p className="mt-4 font-[600] text-16 text-gold-900">
                  {product.name}
                </p>
              </Link>
            );
          })}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="fill-primary-900 w-6 h-12 cursor-pointer"
        >
          <path
            fill="none"
            className="stroke-primary-900"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="m9 5l7 7l-7 7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
