import { useEffect, useState } from "react";

const valuesRanges = {
  mobile: 1,
  tablet: 3,
  laptop: 4,
};

const CoreValues = () => {
  const [currentValues, setCurrentValues] = useState<{
    start: number;
    count: number;
  }>({ start: 0, count: 1 });

  useEffect(() => {
    const mq768 = window.matchMedia("(min-width: 768px)");
    const mq1024 = window.matchMedia("(min-width: 1024px)");
    const mq1536 = window.matchMedia("(min-width: 1536px)");

    const update = () => {
      setCurrentValues((prev) => {
        if (mq1024.matches) return { ...prev, count: valuesRanges.laptop };
        if (mq768.matches) return { ...prev, count: valuesRanges.tablet };
        return { ...prev, count: valuesRanges.mobile };
      });
    };

    // Initial check
    update();

    // Event listeners
    mq768.addEventListener("change", update);
    mq1024.addEventListener("change", update);
    mq1536.addEventListener("change", update);

    return () => {
      mq768.removeEventListener("change", update);
      mq1024.removeEventListener("change", update);
      mq1536.removeEventListener("change", update);
    };
  }, []);

  let valuesToRender = [];
  let count = currentValues.count;

  for (let i = currentValues.start; count !== 0; i++) {
    valuesToRender.push(values[i]);
    count = count - 1;
    if (i == values.length - 1) i = 0;
  }

  const changeValue = (direction: "forward" | "back") => {
    setCurrentValues((prev) => {
      let current = prev.start;
      if (direction === "forward") {
        current = current + 1;
      } else {
        current = current - 1;
      }

      if (current > values.length - 1) {
        current = 0;
      }
      if (current < 0) {
        current = values.length - 1;
      }
      console.log("Changing: ", current);
      return { ...prev, start: current };
    });
  };

  return (
    <section className="bg-primary-900 px-5 lg:px-20 pt-10 pb-20">
      <h3 className="text-white text-center">Our Core Values</h3>
      <div className="lg:block flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="lg:hidden fill-primary-900 w-6 h-12 cursor-pointer"
          onClick={() => changeValue("back")}
        >
          <path
            fill="none"
            className="stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="m15 19l-7-7l7-7"
          ></path>
        </svg>
        <div className="flex justify-center gap-20 mt-15">
          {valuesToRender.map((value, indx) => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="lg:hidden fill-primary-900 w-6 h-12 cursor-pointer"
          onClick={() => changeValue("forward")}
        >
          <path
            fill="none"
            className="stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="m9 5l7 7l-7 7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CoreValues;

const values = [
  {
    title: "Sustainability",
    icon: "/images/core-values/sustainability.png",
    description:
      "We are committed to protecting the environment through eco-friendly practices, renewable energy use, and zero-waste production—including converting shea waste into clean fuel.",
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
      "We blend tradition with modern technology, gradually transitioning to solar-powered machinery and product diversification, to drive sustainable growth.",
  },
  {
    title: "Community",
    icon: "/images/core-values/community.png",
    description:
      "OurShea thrives on local partnerships and community engagement, ensuring our success uplifts those we serve.",
  },
];
