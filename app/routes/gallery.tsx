import React, { useState } from "react";
import Gallery from "~/components/gallery/gallery";
import Photo from "~/components/gallery/Photo";
import type { Route } from "../+types/root";
import { generateMeta } from "meta/gen-meta";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - Gallery",
      description:
        "Explore photos of OurShea’s community, production, and impact.",
      path: "/gallery",
      imageName: "gallery.png",
    }),
  ];
}

export type Photo = {
  url: string;
  name: string;
};


const GalleryPage = () => {
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const onClosePicture = () => {
    console.log("Here...");
    setCurrentPhoto(null);
  };

  return (
    <div>
      {currentPhoto && <Photo {...currentPhoto} onClose={onClosePicture} />}
      <Gallery setPhoto={(photo: Photo) => setCurrentPhoto(photo)} />;
    </div>
  );
};

export default GalleryPage;
