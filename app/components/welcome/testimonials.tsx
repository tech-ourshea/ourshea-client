import React from "react";
const Testimonials = () => {
  return (
    <div className="lg:p-20 px-5 py-7.5">
      <h4 className="text-center">
        What <span className="text-primary-900">Our Clients</span> Say
      </h4>
      <p className="mt-4 text-center">
        Hear directly from our satisfied partners
      </p>

      <ul className="flex flex-wrap justify-center items-center gap-15 lg:gap-50 mt-16">
        {testimonials.map((test, indx) => {
          return (
            <li key={indx} className="">
              <div className="">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="bg-grey-300 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="font-medium text-[16px]">{test.name}</p>
                    <p className="text-sm">{test.designation}</p>
                  </div>
                </div>
                <p className="mt-5 max-w-85.5 text-[16px] lg:text-left text-center">
                  {test.review}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const testimonials = [
  {
    name: "John Doe",
    designation: "Designation",
    img: "",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "John Doe",
    designation: "Designation",
    img: "",
    review:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default Testimonials;
