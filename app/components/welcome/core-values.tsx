const CoreValues = () => {
  return (
    <section className="bg-primary-900 px-20 pt-10 pb-20">
      <h3 className="text-white text-center">Our Core Values</h3>
      {/* <div className="items-center gap-25 grid grid-cols-[48px_1fr_48px]"> */}
      {/* <div className="items-center grid grid-cols-4"> */}
      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="fill-primary-900 w-6 h-12 cursor-pointer"
        >
          <path
            fill="none"
            className="stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="m15 19l-7-7l7-7"
          ></path>
        </svg> */}
      <div className="flex justify-center gap-20 mt-15">
        {values.map((value, indx) => {
          return (
            <div
              key={indx}
              className="flex flex-col items-center gap-10 w-47 text-white text-center"
            >
              <p>{value.title}</p>
              <img src={value.icon} alt={`ourshea ${value.title}`} />
              <p className="text-sm">{value.description}</p>
            </div>
          );
        })}
      </div>
      {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="fill-primary-900 w-6 h-12 cursor-pointer"
        >
          <path
            fill="none"
            className="stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="m9 5l7 7l-7 7"
          ></path>
        </svg> */}
      {/* </div> */}
    </section>
  );
};

export default CoreValues;

const values = [
  {
    title: "Sustainability",
    icon: "/images/core-values/sustainability.png",
    description:
      "We are committed to protecting the environment through eco-friendly practices, renewable energy use, and zero-waste production—including converting shea waste into clean fuel",
  },

  {
    title: "Integrity",
    icon: "/images/core-values/integrity.png",
    description:
      "Our processes are guided by transparency, ethical sourcing, and fair-trade principles, ensuring trust with our partners and customers.",
  },

  {
    title: "Innovation",
    icon: "/images/core-values/innovation.png",
    description:
      "We blend tradition with modern technology, gradually transitioning to solar-powered machinery and product diversification, to drive sustainable growth",
  },
  {
    title: "Community",
    icon: "/images/core-values/community.png",
    description:
      "OurShea thrives on local partnerships and community engagement, ensuring our success uplifts those we serve.",
  },
];
