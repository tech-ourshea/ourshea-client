import { EMAIL } from "~/utils/general";

const Contacts = () => {
  return (
    <>
      <div className="relative mt-7 w-full h-62">
        <img
          src="/images/gallery/hero.png"
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="flex justify-center gap-58 mx-20 my-20">
        <div>
          <h1 className="max-w-76 text-6xl">Let’s Get in touch</h1>
          <p className="mt-10 font-[600]">We are Just call away from you!!</p>
          <p className="mt-10">Phone</p>
          <p className="mt-2">
            <strong>(+233) (0) 24 448 5242 | 54 472 6332</strong>
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
        <div className="mt-13">
          <div className="flex justify-between items-center">
            <svg
              width="206"
              height="24"
              viewBox="0 0 206 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M205.067 13.0509C205.652 12.4651 205.652 11.5154 205.067 10.9296L195.521 1.38363C194.935 0.797846 193.985 0.797846 193.399 1.38363C192.814 1.96942 192.814 2.91917 193.399 3.50495L201.885 11.9902L193.399 20.4755C192.814 21.0613 192.814 22.011 193.399 22.5968C193.985 23.1826 194.935 23.1826 195.521 22.5968L205.067 13.0509ZM-0.00390625 11.9902V13.4902H204.006V11.9902V10.4902H-0.00390625V11.9902Z"
                fill="black"
              />
            </svg>

            <p className="max-w-117">
              We are excited to hear from and have you purchase our products!!!
            </p>
          </div>
          <img
            className="mt-12"
            src="/images/contact-us/img_1.png"
            alt={"ourshea " + "women holding shea nuts"}
          />
        </div>
      </div>
    </>
  );
};

export default Contacts;
