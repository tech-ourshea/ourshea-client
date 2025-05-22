import React, { useState } from "react";
import Gallery from "~/components/gallery/gallery";
import Photo from "~/components/gallery/Photo";

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
