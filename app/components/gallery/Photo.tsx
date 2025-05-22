import React from "react";

type Props = {
  url: string;
  name: string;
  onClose: Function;
};
const Photo = ({ url, name, onClose }: Props) => {
  return (
    <div
      className="z-50 absolute flex justify-center items-center bg-primary-900/50 w-full h-full"
      onClick={() => onClose()}
    >
      <img className="w-8/10 h-auto" src={url} alt={`ourshea - ${name}`} />
    </div>
  );
};

export default Photo;
