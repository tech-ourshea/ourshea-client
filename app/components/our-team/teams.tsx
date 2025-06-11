import { type FC } from "react";

const Teams = () => {
  return (
    <>
      <div className="relative mt-7 w-full h-62">
        <img
          src="/images/our-team/hero.png"
          alt="ourshea women making shea butter"
          className="w-full h-full object-cover"
        />
        <div className="top-0 left-0 absolute flex justify-center items-center bg-primary-900/30 w-full h-full text-white">
          <h2>Our Team</h2>
        </div>
      </div>
      <div>
        <h4 className="mt-25 px-5.5 text-primary-900 text-center">
          Meet our Team
        </h4>
        <p className="mt-2.5 px-5.5 text-center">
          With diverse backgrounds we are a strong team building the vision of
          OurShea
        </p>

        {/* <div className="flex flex-col items-center mt-10 px-5.5"> */}
        <ul className="lg:flex flex-wrap justify-center items-center gap-25 mt-10">
          {teamMembers.map((member, indx) => {
            return <TeamMember {...member} indx={indx} />;
          })}
        </ul>
        {/* </div> */}
      </div>
    </>
  );
};

type TeamMemberProps = {
  name: string;
  designation: string;
  img: string;
  bio: string;
  indx: number;
};
const TeamMember: FC<TeamMemberProps> = ({
  name,
  designation,
  img,
  bio,
  indx,
}) => {
  return (
    <li key={indx} className="px-5.5">
      <div>
        <img
          className="lg:mx-auto mt-10 lg:mt-0 w-full lg:w-1/3 h-100 lg:h-170 object-cover"
          src={img}
          alt={`ourshea ${name} ${designation}`}
        />
        <p className="mt-2.5 text-lg text-center">{name}</p>
        <p className="mb-2 text-sm text-center">{designation}</p>
      </div>
      <div className="">
        <h5 className="hidden pt-4 pb-2.5">Bio</h5>
        <div className="space-y-6 lg:px-40 overflow-scroll no-scrollbar">
          {bio.split("\n").map((bio, indx) => (
            <div key={indx}>
              <p className="text-left">{bio}</p>
              {/* <br /> */}
            </div>
          ))}
        </div>
      </div>
    </li>
  );

  // <li
  //   key={indx}
  //   className="lg:flex gap-8 lg:bg-primary-100 px-5.5 lg:px-0 lg:pr-8 lg:h-85"
  // >
  //   <div>
  //     <img
  //       className="w-full lg:w-55 h-100 lg:h-63 object-cover"
  //       src={img}
  //       alt={`ourshea ${name} ${designation}`}
  //     />
  //     <p className="mt-2.5 text-lg text-center">{name}</p>
  //     <p className="mb-2 text-sm text-center">{designation}</p>
  //   </div>
  //   <div className="lg:w-75">
  //     <h5 className="hidden lg:block pt-4 pb-2.5">Bio</h5>
  //     <div className="lg:h-66 overflow-scroll no-scrollbar">
  //       {bio.split("\n").map((bio, indx) => (
  //         <div key={indx}>
  //           <p className="lg:text-[16px] lg:text-left text-center">{bio}</p>
  //           <br />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </li>;
};

const teamMembers = [
  {
    name: "Francis Abugbilla, PhD",
    designation: "Chief Executive Officer",
    img: "/images/our-team/francis.webp",
    bio: `Francis is a fifth-generation shea butter entrepreneur whose journey began by helping his mother in their family's shea butter business in northern Ghana. Rooted in this heritage, he developed a deep commitment to advancing sustainable livelihoods for women and children in rural communities. Building on this foundation, Francis has spent years improving northern Ghana's socio-economic conditions through inclusive business models, ethical sourcing, and value-added processing.

As the Chief Executive Officer at OurShea Ghana, Francis defines and executes the company's product vision and roadmap, aligning them with strategic business goals. With a Certificate in Product Management from Leland (USA), he applies modern frameworks in user needs, agile development, and growth strategy to drive innovation in clean, organic shea products. His work is about creating exceptional products and building a socially responsible and environmentally sustainable brand.

Francis holds a Ph.D. in International Studies and a Graduate Certificate in International Development Policy and Management from the University of Washington (USA). He is also an MBA Candidate at the Plaster Graduate School of Business, University of the Cumberlands (USA), where he is deepening his expertise in strategic management, entrepreneurship, new venture development, leadership, and sustainable enterprise development.

In recognition of his leadership and innovation, Francis represented OurShea Ghana at the prestigious and highly competitive BlueTech/CleanTech Accelerator organized by the Northwest Innovation Resource Center in Washington State, USA, in 2024. His participation in this accelerator underscores his commitment to bridging local knowledge with global technology and clean energy solutions outside of his professional pursuits, he values spending quality time with his family and enjoys being outdoors. He is also passionate about emerging technologies and sustainability trends, always staying informed about how innovation can drive equitable and eco-conscious development across Africa and beyond.`,
  },

  {
    name: "Eunice Awini",
    designation: "Chief Financial Officer",
    img: "/images/our-team/eunice.webp",
    bio: `Eunice is a dynamic entrepreneur, experienced banker, and strategic financial leader with over four years of professional experience in rural banking. She serves as a Credit Officer at a reputable rural bank in Ghana, focusing on expanding financial access for underserved populations, particularly women's cooperatives. In this role, she has been instrumental in designing and managing credit programs, facilitating group and individual loans, and promoting financial literacy among rural clients. Her efforts have directly contributed to the growth of women-led enterprises, enhanced household incomes, and strengthened local economies.

In addition to her credit management responsibilities, Eunice also holds the position of Chief Financial Officer (CFO) at OurShea Ghana, which is aimed at promoting inclusive finance and entrepreneurship. As CFO, she oversees financial planning.

Eunice earned her Bachelor of Science in Commerce from the University of Cape Coast School of Business, where she built a solid foundation in finance, entrepreneurship, and development economics. Her academic training and field experience fuel her passion for using banking as a tool for economic empowerment.

Outside her formal roles, she is actively engaged in community development. She volunteers with women's empowerment groups, mentors young entrepreneurs, and contributes to policy discussions on financial inclusion. She is particularly interested in innovative models of rural finance, digitized banking solutions, and sustainable development strategies for marginalized populations.`,
  },

  {
    name: "Raymond Ayinne",
    designation: "Chief Operations Officer",
    img: "/images/our-team/raymond.webp",

    bio: `Raymond is an accomplished development professional and the Chief Operations Officer (COO) of OurShea Ghana, bringing over two decades of strategic leadership in the nonprofit sector. His expertise lies primarily in advancing women's empowerment and child rights, and he has a strong operational presence across northern Ghana. As COO, Raymond oversees program implementation, organizational strategy, and cross-functional coordination, ensuring mission-driven initiatives are delivered efficiently and sustainably.

Throughout his 20+ year career, Raymond has led community-based advocacy campaigns, facilitated capacity-building programs, and driven policy engagement efforts aimed at promoting gender equity and protecting vulnerable children. His leadership has fostered impactful partnerships with local governments, grassroots organizations, and international donors, amplifying the voices of marginalized populations and scaling evidence-based interventions.

Raymond holds a Master's Degree in Mass Communications from the University of Ghana, Ghana, and a Master's in Development Communication from the University for Development Studies, Ghana. His academic foundation informs his thoughtful approach to public engagement, media strategy, and stakeholder communications in development contexts.

Beyond his professional role, he is deeply committed to sustainability and environmental stewardship. He actively participates in local tree-planting campaigns, champions waste reduction through community education, and supports eco-friendly innovations that promote climate resilience in rural and peri-urban communities. He continues to be a driving force in shaping inclusive, resilient, and community-led development strategies throughout northern Ghana and beyond.`,
  },
];
export default Teams;
