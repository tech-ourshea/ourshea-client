import MissionVision from "./mission-vision";
import SDGs from "./sdgs";
import Certifications from "./certifications";

const WhoWeAre = () => {
  return (
    <div>
      <section className="relative w-full h-62">
        <img
          src="/images/who-we-are/hero.png"
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>Who We Are</h2>
        </div>
      </section>

      <section className="px-5.5 lg:px-20 pt-25 pb-20">
        <h4 className="text-primary-900">About OurShea</h4>
        <p className="mt-7">
          Rooted in generations of shea butter craftsmanship, OurShea was
          founded in 2024 as an eco-conscious producer of premium organic shea
          butter. Based in northern Ghana and in partnership with the Bongo Soe
          Shea Butter Women Group, we process shea butter for local and
          international markets—creating jobs, supporting women, and protecting
          the environment. Blessed with abundant sunshine, our region provides
          the perfect climate for cultivating high-quality shea nuts.
        </p>
        <div className="flex lg:flex-row flex-col gap-10 mt-7">
          <img
            src="/images/who-we-are.png"
            alt="ourshea - women carrying shea seedlings"
          />
          <div className="flex flex-col justify-center">
            <p>
              From traditional methods to innovative agile practices, we blend
              heritage and technology to meet global demand for ethically
              sourced skincare ingredients. We are more than a manufacturer.
              OurShea transforms shea waste into smokeless charcoal briquettes,
              helping reduce deforestation and promote clean household energy.
            </p>
            <p className="mt-4">
              Our product line includes handcrafted soaps, bulk shea butter for
              cosmetic companies, and smokeless charcoal—all produced with
              environmental and social responsibility at heart.
            </p>
          </div>
        </div>
      </section>

      <MissionVision />
      <SDGs />
      <Certifications />
    </div>
  );
};

export default WhoWeAre;
