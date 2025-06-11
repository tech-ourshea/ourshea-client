import { Welcome } from "~/components/welcome/welcome";
import type { Route } from "./+types/home";
import { generateMeta } from "meta/gen-meta";

// <meta name="description" content={description} />
// <link rel="canonical" href={`https://yourdomain.com${location.pathname}`} />

// {/* Open Graph */}
// <meta property="og:title" content={title} />
// <meta property="og:description" content={description} />
// <meta property="og:type" content="website" />
// <meta property="og:url" content={`https://yourdomain.com${location.pathname}`} />
// <meta property="og:image" content="https://yourdomain.com/og-image.png" />

// {/* Twitter */}
// <meta name="twitter:card" content="summary_large_image" />
// <meta name="twitter:title" content={title} />
// <meta name="twitter:description" content={description} />
// <meta name="twitter:image" content="https://yourdomain.com/twitter-image.png" />

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "/logo.png",
    type: "image/png",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - Home",
      description:
        "We are an eco-conscious producer of premium organic shea butter.",
      path: "/",
      imageName: "home.png",
    }),
  ];
}

export default function Home() {
  return <Welcome />;
}
