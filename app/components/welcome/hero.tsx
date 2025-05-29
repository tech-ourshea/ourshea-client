import products from "../../utils/products.json";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const heroImages = [
  "/images/landing-img.png",
  "/images/landing-img.png",
  "/images/landing-img.png",
];

const productRanges = {
  mobile: 1,
  tablet: 2,
  laptop: 3,
};
const Hero = () => {
  const [currentImgIndx, setCurrentImgIndx] = useState<number>(0);
  const [currentProducts, setCurrentProducts] = useState<{
    start: number;
    count: number;
  }>({ start: 0, count: 1 });

  useEffect(() => {
    const mq768 = window.matchMedia("(min-width: 768px)");
    const mq1024 = window.matchMedia("(min-width: 1024px)");
    const mq1536 = window.matchMedia("(min-width: 1536px)");

    const update = () => {
      setCurrentProducts((prev) => {
        if (mq1536.matches) return { ...prev, count: productRanges.laptop };
        if (mq1024.matches) return { ...prev, count: productRanges.tablet };
        return { ...prev, count: productRanges.mobile };
      });
    };

    // Initial check
    update();

    // Event listeners
    mq768.addEventListener("change", update);
    mq1024.addEventListener("change", update);
    mq1536.addEventListener("change", update);

    return () => {
      mq768.removeEventListener("change", update);
      mq1024.removeEventListener("change", update);
      mq1536.removeEventListener("change", update);
    };
  }, []);

  let productsToRender = [];
  let count = currentProducts.count;
  for (let i = currentProducts.start; count !== 0; i++) {
    productsToRender.push(products[i]);
    count = count - 1;
    if (i == products.length - 1) i = 0;
  }

  const changeProduct = (direction: "forward" | "back") => {
    setCurrentProducts((prev) => {
      let current = prev.start;
      if (direction === "forward") {
        current = current + 1;
      } else {
        current = current - 1;
      }

      if (current > products.length - 1) {
        current = 0;
      }
      if (current < 0) {
        current = products.length - 1;
      }
      return { ...prev, start: current };
    });
  };
  return (
    <section className="border-primary-900 border-b-10">
      <div className="relative mt-2.5 md:mt-7 h-147">
        <img
          className="z-10 absolute w-full h-full object-cover"
          src="/images/landing-img.png"
          alt="landing image"
        />

        <div className="z-20 absolute mt-47 w-full text-white text-center">
          <h1 className="m-auto px-1 max-w-218.25 text-2xl">
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
      <div className="flex justify-center items-center gap-20 lg:gap-60 px-4 lg:px-20 py-7 lg:py-16.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="fill-primary-900 w-6 h-12 cursor-pointer"
          onClick={() => changeProduct("back")}
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
          {productsToRender.map((product, indx) => {
            return (
              <Link
                to={product.url}
                key={indx}
                className="flex flex-col items-center"
              >
                <img
                  src={product.images.small}
                  alt={`OurShea-${product.name}`}
                  className="w-38 h-22.75 object-fill"
                />
                <p className="mt-4 font-[600] text-16 text-gold-900 text-center">
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
          onClick={() => changeProduct("forward")}
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
// How do I check for screen sizes for 768px and above, 1024px and above, 1536px and above using tx?