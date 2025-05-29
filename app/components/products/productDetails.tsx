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
          <h4 className="mb-10 lg:mb-0 text-primary-900 text-center">{`The Idea behind ${product.name}`}</h4>
          <div className="flex flex-col md:flex-wrap justify-center items-center gap-9">
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
      <div className="flex md:flex-row flex-col gap-10 md:gap-75 bg-primary-900 px-5.5 md:px-20 py-10">
        <div>
          <h4 className="mb-7 text-white">Product Information</h4>
          {Object.entries(product.productInformation).map((ent, indx) => {
            return (
              <p key={indx}>
                <span className="font-medium">{ent[0]}</span>
                {`:     `}
                <span>{ent[1]}</span>
              </p>
            );
          })}
        </div>
        <div>
          <h4 className="mb-7 font-medium text-white">Partners</h4>
          <ul className="flex md:flex-row flex-col justify-center md:gap-8">
            {product.partners.map((partner, indx) => {
              return (
                <img
                  key={indx}
                  className="w-27 h-auto"
                  src={partner.logo}
                  alt={`ourshea partner ${partner.name}`}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
