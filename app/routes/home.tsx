import { Welcome } from "~/components/welcome/welcome";
import type { Route } from "./+types/home";

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
    { title: "OurShea - Home" },

    {
      name: "description",
      content:
        "We are an Eco-conscious producer of premium organic shea butter",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "OurShea Team",
    },

    { name: "og:title", content: "OurShea - Home" },
    {
      name: "og:description",
      content:
        "We are an Eco-conscious producer of premium organic shea butter",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:url",
      content: "https://ourshea.com",
    },
    {
      name: "og:image",
      content: "https://ourshea.com/images/og-image.png",
    },
    {
      name: "og:site_name",
      content: "OurShea",
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "OurShea - Home",
    },
    {
      name: "twitter:description",
      content:
        "We are an Eco-conscious producer of premium organic shea butter",
    },
    {
      name: "twitter:image",
      content: "https://ourshea.com/images/twitter-image.png",
    },
    {
      name: "twitter:creator",
      content: "@oursheaeco",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
