import { generateMeta } from "meta/gen-meta";
import Directors from "~/components/board-of-directors/directors";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - Board of Directors",
      description:
        "Discover the experienced leadership guiding OurShea toward sustainable excellence.",
      path: "/board",
      imageName: "board.png",
    }),
  ];
}

const OurBoradOfDirectors = () => {
  return (
    <div>
      <Directors />
    </div>
  );
};

export default OurBoradOfDirectors;
