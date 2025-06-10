import type { ProductType } from "types";

type Props = {
  product: ProductType;
};
const ProductDetails = ({ product }: Props) => {
  if (!product) throw new Error("Product not found");

  return (
    <div>
      <div className="relative mt-7 w-full h-62">
        <img
          src={product.images.banner}
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>{product.name}</h2>
        </div>
      </div>
      <div className="px-5.5 md:px-20 pt-25 pb-20">
        <div className="mx-auto w-fit">
          <h4 className="mb-10 lg:mb-0 text-primary-900 lg:text-left text-center">
            {product.name}
          </h4>
          <div className="flex lg:flex-row flex-col md:flex-wrap justify-center items-center gap-9 lg:mt-8">
            <img src={product.images.large} alt={`ourshea ${product.name}`} />
            <div className="max-w-159">
              {product.details.map((prod, indx) => {
                return (
                  <p key={indx} className="mt-7">
                    {prod}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-19 px-5.5 md:px-40">
        {product.specifications &&
          parseObject(product.specifications, "Specifications")}
        {product.ingredients && parseObject(product.ingredients, "Ingredients")}
        {product.features && parseObject(product.features, "Features")}
        {product.benefits && parseList(product.benefits, "Benefits")}
        {product.applications &&
          parseObject(product.applications, "Applications")}
        {product.storage && parseList(product.storage, "Storage")}
        {product.storage && parseList(product.storage, "Storage")}
        {product["Minimum Order Quantity (MOQ)"] && (
          <div className="">
            <p className="mb-8 font-semibold text-primary-900">
              Minimum Order Quantity (MOQ)
            </p>
            <p>{product["Minimum Order Quantity (MOQ)"]}</p>
          </div>
        )}
        {product["Lead Time"] && (
          <div className="">
            <p className="mb-8 font-semibold text-primary-900">Lead Time</p>
            <p>{product["Lead Time"]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const parseObject = (data: Object, title?: string) => {
  return (
    <div className="">
      <p className="mb-8 font-semibold text-primary-900">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {Object.entries(data).map((dat, indx) => {
          let heading = dat[0];
          if (heading === "0" || !heading) {
            heading = "";
          } else {
            heading = heading + ":   ";
          }
          return (
            <li
              key={indx}
              className="items-center gap-3 grid grid-cols-[4px_1fr]"
            >
              <div className="flex bg-primary-900 rounded-full w-1 h-1"></div>
              <div>
                <p>{`${heading}${dat[1]}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const parseList = (data: string[], title?: string) => {
  return (
    <div className="">
      <p className="mb-8 font-semibold text-primary-900">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {data.map((dat, indx) => {
          return (
            <li
              key={indx}
              className="items-center gap-3 grid grid-cols-[4px_1fr]"
            >
              <div className="flex bg-primary-900 rounded-full w-1 h-1"></div>
              <div>
                <p>{dat}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDetails;
