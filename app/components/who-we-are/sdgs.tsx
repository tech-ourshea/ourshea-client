import React from "react";

const sdgs = [
  "/images/sdgs/sdg_1.png",
  "/images/sdgs/sdg_2.png",
  "/images/sdgs/sdg_5.png",
  "/images/sdgs/sdg_8.png",
  "/images/sdgs/sdg_10.png",
  "/images/sdgs/sdg_13.png",
];
const SDGs = () => {
  return (
    <section className="p-5.5 lg:p-20">
      <p className="mx-auto max-w-320 font-[600] text-center">
        Our operations support the Sustainable Development Goals 1, 2, 5, 8, 10,
        and 13. We believe in addressing some of the Sustainable Development
        Goals (SDGs)
      </p>
      <ul className="flex flex-wrap justify-center items-center gap-x-12.5 gap-y-6 mt-10">
        {sdgs.map((sdg, indx) => {
          return (
            <li key={indx} className="">
              <img src={sdg} alt="ourshea sdg" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SDGs;
