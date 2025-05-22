import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/main-layer.tsx", [
    index("routes/home.tsx"),
    ...prefix("/about-us", [
      route("/who-we-are", "routes/about/about-us.tsx"),
      route("our-team", "routes/about/our-team.tsx"),
      route("board-of-directors", "routes/about/board-of-directors.tsx"),
    ]),

    route("/products/:slug", "routes/products/product.tsx"),
    route("gallery", "routes/gallery.tsx"),
    route("contact-us", "routes/contact-us.tsx"),
  ]),
] satisfies RouteConfig;
