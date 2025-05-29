import React, { useState } from "react";
const certificates = [
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
  {
    src: "/images/certifications/certificate.png",
    name: "cert name",
  },
];
const Certifications = () => {
  const [showingAll, setShowingAll] = useState<boolean>(false);
  const showing = showingAll ? certificates : certificates.slice(0, 4);
  return (
    <section className="px-20 pb-10">
      <h4 className="text-primary-900 text-center">Our Certifications</h4>
      <p className="text-center">
        See below our certifcations and product infomation
      </p>
      <ul className="flex flex-wrap justify-center items-center gap-15 mt-10">
        {showing.map((cert, indx) => {
          return (
            <li key={indx} className="flex flex-col">
              <img className="" src={cert.src} alt={`ourshea A${cert.name}`} />
              <button
                className="flex justify-center items-center bg-grey-200 hover:bg-grey-500 mx-auto mt-7 border-[1px] border-black w-38 h-9 cursor-pointer"
                type="button"
              >
                Download
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="flex justify-center items-center bg-primary-900 hover:bg-primary-700 mx-auto mt-10 border-[1px] border-black w-38 h-9 text-white cursor-pointer"
        type="button"
        onClick={() => setShowingAll((prev) => !prev)}
      >
        {showingAll ? "Show Less" : "Show All"}
      </button>
    </section>
  );
};

export default Certifications;
