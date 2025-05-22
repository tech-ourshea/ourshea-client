import React from "react";
const Testimonials = () => {
  return (
    <div className="p-20">
      <h4>
        What <span className="text-primary-900">Our Clients</span> Say
      </h4>
      <p>Hear directly from our satisfied partners</p>

      <ul className="flex items-center gap-50 mt-16">
        {testimonials.map((test, indx) => {
          return (
            <li key={indx} className="">
              <div className="">
                <div className="flex items-center gap-2.5">
                  <div className="bg-grey-300 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="font-medium text-[16px]">{test.name}</p>
                    <p className="text-sm">{test.designation}</p>
                  </div>
                </div>
                <p className="mt-5 max-w-85.5 text-[16px]">{test.review}</p>
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
