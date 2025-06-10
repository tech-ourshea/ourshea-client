import { useState } from "react";
import pictures from "../../utils/gallery/pictures.json";
import videos from "../../utils/gallery/videos.json";
import YoutubePlayer from "./YoutubePlayer";

type Props = {
  setPhoto: Function;
};

const numberOfPhotosToShow = 9;
const numberOfVideosToShow = 8;
const Gallery = ({ setPhoto }: Props) => {
  const [showAllPictures, setShowAllPictures] = useState<boolean>(false);
  const [showAllVideos, setShowAllVideos] = useState<boolean>(false);

  const showingPhotos = showAllPictures
    ? pictures
    : pictures.slice(0, numberOfPhotosToShow);
  const showingVideos = showAllVideos
    ? videos
    : videos.slice(0, numberOfVideosToShow);

  return (
    <>
      <div className="relative mt-7 w-full h-62">
        <img
          src="/images/gallery/hero.png"
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>Gallery</h2>
        </div>
      </div>
      <div className="p-20">
        <h4 className="mb-10 text-primary-900 text-center">Photos</h4>
        <ul className="flex flex-wrap justify-center gap-20">
          {showingPhotos.map((pic, indx) => {
            return (
              <li
                key={indx}
                className=""
                onClick={() => setPhoto({ url: pic.link, name: pic.name })}
              >
                <img
                  src={pic.link}
                  className="max-w-92.75 max-h-62 cursor-pointer"
                />
                <p className="mt-2 max-w-92.75 text-center">{pic.name}</p>
              </li>
            );
          })}
        </ul>
        {pictures.length > numberOfPhotosToShow && (
          <button
            className="flex justify-center items-center bg-primary-900 hover:bg-primary-700 mx-auto mt-30 border-[1px] border-black w-38 h-9 text-white cursor-pointer"
            type="button"
            onClick={() => setShowAllPictures((prev) => !prev)}
          >
            {showAllPictures ? "Show Less" : "Show All"}
          </button>
        )}
      </div>

      <div className="bg-primary-100/50 mt-10 p-20">
        <h4 className="mb-10 text-primary-900 text-center">Videos</h4>
        <ul className="flex flex-wrap justify-center gap-20">
          {showingVideos.map((vid, indx) => {
            return (
              <li key={indx} className="">
                <YoutubePlayer embedId={vid.id} className="w-92.75 h-62" />
                <p className="max-w-92.75 text-center">{vid.name}</p>
              </li>
            );
          })}
        </ul>
        {pictures.length > numberOfPhotosToShow && (
          <button
            className="flex justify-center items-center bg-primary-900 hover:bg-primary-700 mx-auto mt-10 border-[1px] border-black w-38 h-9 text-white cursor-pointer"
            type="button"
            onClick={() => setShowAllVideos((prev) => !prev)}
          >
            {showAllVideos ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </>
  );
};

export default Gallery;
