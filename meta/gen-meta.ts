interface SocialMetaArgs {
  pageTitle: string;
  description: string;
  path: string;
  imageName: string;
}

const generalMeta = [
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
];

export function generateMeta({
  pageTitle,
  description,
  path,
  imageName,
}: SocialMetaArgs) {
  const fullUrl = `https://ourshea.com${path}`;
  const imageUrl = `https://ourshea.com/meta/${imageName}`;

  return [
    { title: pageTitle },

    { name: "description", content: description },

    { name: "og:title", content: pageTitle },
    { name: "og:description", content: description },
    { name: "og:type", content: "website" },
    { name: "og:url", content: fullUrl },
    { name: "og:image", content: imageUrl },
    { name: "og:site_name", content: "OurShea" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:creator", content: "@oursheaeco" },
    ...generalMeta,
  ];
}
