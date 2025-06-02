import React, { useState } from "react";
import Gallery from "~/components/gallery/gallery";
import Photo from "~/components/gallery/Photo";
import type { Route } from "../+types/root";
import { generateMeta } from "meta/gen-meta";
import Modal from "~/components/ui/modal";

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
    setCurrentPhoto(null);
  };

  return (
    <div>
      {/* {currentPhoto && <Photo {...currentPhoto} onClose={onClosePicture} />} */}
      {currentPhoto && (
        <Modal
          className="bg-green-100"
          isOpen={currentPhoto !== null}
          onClose={onClosePicture}
        >
          <div className="flex flex-col justify-center items-center h-full cursor-pointer">
            <img
              className="w-8/10 h-auto"
              src={currentPhoto.url}
              alt={`ourshea - ${name}`}
            />
            <p className="text-sm">click anywhere to close</p>
          </div>
        </Modal>
      )}
      <Gallery setPhoto={(photo: Photo) => setCurrentPhoto(photo)} />;
    </div>
  );
};

export default GalleryPage;
