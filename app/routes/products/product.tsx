import type { Route } from "../+types/home";
import products from "../../utils/products.json";
import ProductDetails from "~/components/products/productDetails";
import type { ProductType } from "types";
import { Link } from "react-router";
import { generateMeta } from "meta/gen-meta";

export function meta({ params }: Route.MetaArgs) {
  let name;
  const product = products.find((prod) => prod.slug === params.slug);
  if (!product) name = "products";
  name = product?.name;
  return [
    ...generateMeta({
      pageTitle: `OurShea - ${name}`,
      description:
        "Meet the passionate individuals behind OurShea’s mission and impact.",
      path: "/team",
      imageName: "team.png",
    }),
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const product = products.find((prod) => prod.slug === params.slug);
  if (!product) throw new Error("Product not found");
  return product;
}

export function ErrorBoundary() {
  return (
    <div className="mx-auto mt-9 w-80 text-center">
      <h2 className="text-primary-900">Product not found</h2>
      <p className="text-sm">Explore other products</p>
      <ul className="flex flex-col items-center gap-2 mt-10 text-left">
        {products.map((prod, indx) => {
          return (
            <Link to={prod.url} key={indx} className="flex items-center gap-2">
              <img
                className="w-6 h-6"
                src={prod.images.small}
                alt={"ourshea " + prod.name}
              />
              <p className="font-light text-primary-900">{prod.name}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

const Product = ({ loaderData }: Route.ComponentProps) => {
  return <ProductDetails product={loaderData as unknown as ProductType} />;
};

export default Product;
