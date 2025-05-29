import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="flex md:flex-row flex-col justify-center gap-5 md:p-20 px-5.5 py-7.5">
      <img
        className=""
        src="images/who-we-are.png"
        alt="ourshea - women with shea"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-primary-900">Who We Are</h2>
        <p className="mt-10">
          We are more than a manufacturer. OurShea transforms shea waste into
          smokeless charcoal briquettes, helping reduce deforestation and
          promote clean household energy. Our product line includes handcrafted
          soaps, bulk shea butter for cosmetic companies, and smokeless charcoal
          all produced with environmental and social responsibility at heart.
        </p>
        <Link
          className="mt-9 font-medium text-primary-900 text-right"
          to="/about-us/who-we-are"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About;
