import { EMAIL } from "~/utils/general";

const Contacts = () => {
  return (
    <>
      <div className="relative mt-3 w-full h-62">
        <img
          src="/images/gallery/hero.png"
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>Contact Us</h2>
        </div>
      </div>
      {/* <div className="lg:flex justify-between items-center gap-58 lg:gap-20 grid-cols-[328px_713px] mx-5.5 lg:mx-20 mt-10 lg:mt-30 mb-9">
        <div className="hidden lg:block">
          <svg
            width="206"
            height="24"
            viewBox="0 0 206 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-right"
          >
            <path
              d="M205.067 13.0509C205.652 12.4651 205.652 11.5154 205.067 10.9296L195.521 1.38363C194.935 0.797846 193.985 0.797846 193.399 1.38363C192.814 1.96942 192.814 2.91917 193.399 3.50495L201.885 11.9902L193.399 20.4755C192.814 21.0613 192.814 22.011 193.399 22.5968C193.985 23.1826 194.935 23.1826 195.521 22.5968L205.067 13.0509ZM-0.00390625 11.9902V13.4902H204.006V11.9902V10.4902H-0.00390625V11.9902Z"
              fill="black"
            />
          </svg>
        </div>
        <h1 className="text-4xl lg:text-6xl text-center lg:text-right">
          Let’s get in touch
        </h1>
      </div> */}

      <div className="lg:flex lg:justify-between items-center lg:items-center lg:gap-20 mx-5.5 lg:mx-20 mt-10 lg:text-left text-center">
        <div className="">
          <p className="font-[600]">Let’s get in touch:</p>
          <p className="mt-10">Phone</p>
          <p className="mt-2">
            <strong>(+233) (0) 24 448 5242</strong>
            <br />
            <strong>+1 (206) 979 8033</strong>
          </p>
          <p className="mt-8">Email</p>
          <p className="mt-2">
            <strong>{EMAIL}</strong>
          </p>
          <p className="mt-8">Office Address</p>
          <p className="mt-2">
            <strong>
              OurShea Ghana LTD
              <br /> Post Office Box 148,
              <br /> Bongo Soe, Upper East Region,
              <br />
              Ghana-West Africa
            </strong>
          </p>
        </div>
        <img
          className="hidden lg:block max-w-100 lg:max-w-122 xl:max-w-178 max-h-56 lg:max-h-70 xl:max-h-102"
          src="/images/contact-us/img_1.png"
          alt={"ourshea " + "women holding shea nuts"}
        />
      </div>
    </>
  );
};

export default Contacts;
