import React from "react";

const Teams = () => {
  return (
    <>
      <div className="relative mt-7 w-full h-62">
        <img
          src="/images/our-team/hero.png"
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>Our Team</h2>
        </div>
      </div>
      <div>
        <h4 className="mt-25 text-primary-900 text-center">Meet our Team</h4>
        <p className="mt-2.5 text-center">
          With diverse backgrounds we are a strong team building the vision of
          OurShea
        </p>

        <div className="flex flex-col items-center mt-10 px-5.5">
          <ul className="flex flex-wrap justify-center items-center gap-25">
            {teamMembers.map((member, indx) => {
              return (
                <li key={indx} className="relative h-70.5">
                  <img
                    className="w-55 h-62.5 object-cover"
                    src={member.img}
                    alt={`ourshea ${member.name} ${member.designation}`}
                  />
                  <div className="bottom-0 left-1/2 absolute bg-grey-200 pt-1 pl-3 w-46 -translate-x-1/2 transform">
                    <p className="text-lg">{member.name}</p>
                    <p className="mb-2 text-sm">{member.designation}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const teamMembers = [
  {
    name: "Francis Abugbilla, PhD",
    designation: "Chief Executive Officer",
    img: "/images/our-team/francis.webp",
  },

  {
    name: "Raymond Ayinne",
    designation: "Chief Operations Officer",
    img: "/images/our-team/raymond.webp",
  },
  {
    name: "Eunice Awini",
    designation: "Chief Financial Officer",
    img: "/images/our-team/eunice.webp",
  },
];
export default Teams;
