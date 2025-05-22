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
          With diverse backgrounds we are a strong team towards building the
          vision of OurShea
        </p>

        <div className="flex flex-col items-center mt-10">
          <ul className="flex gap-25">
            {teamMembers.slice(0, 4).map((member, indx) => {
              return (
                <li key={indx} className="relative h-70.5">
                  <img
                    className="h-62.5"
                    src={member.img}
                    alt={`ourshea ${member.name} ${member.designation}`}
                  />
                  <div className="bottom-0 left-1/2 absolute bg-grey-200 pt-1 pl-3 w-46 -translate-x-1/2 transform">
                    <p>{member.name}</p>
                    <p className="mb-2 text-sm">{member.designation}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-25 mt-25">
            {teamMembers.slice(4, 7).map((member, indx) => {
              return (
                <li key={indx} className="relative h-70.5">
                  <img
                    className="h-62.5"
                    src={member.img}
                    alt={`ourshea ${member.name} ${member.designation}`}
                  />
                  <div className="bottom-0 left-1/2 absolute bg-grey-200 pt-1 pl-3 w-46 -translate-x-1/2 transform">
                    <p>{member.name}</p>
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
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_1.png",
  },

  {
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_2.png",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_3.png",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_4.png",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_5.png",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_6.png",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "/images/our-team/member_7.png",
  },
];
export default Teams;
