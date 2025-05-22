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
    <section className="p-20">
      <p className="mx-auto max-w-320 font-[600] text-center">
        Our operations support the Sustainable Development Goals 1, 2, 5, 8, 10,
        and 13. We believe in gender equality, climate action, and responsible
        production
      </p>
      <ul className="justify-center gap-x-12.5 gap-y-6 grid grid-cols-[210px_210px_210px] mt-10">
        {sdgs.map((sdg, indx) => {
          return (
            <li key={indx} className="bg-red-600">
              <img src={sdg} alt="ourshea sdg" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SDGs;
