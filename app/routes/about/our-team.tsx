import Teams from "~/components/our-team/teams";
import type { Route } from "../+types/home";
import { generateMeta } from "meta/gen-meta";

export function meta({}: Route.MetaArgs) {
  return [
    ...generateMeta({
      pageTitle: "OurShea - Team",
      description:
        "Meet the passionate individuals behind OurShea’s mission and impact.",
      path: "/team",
      imageName: "team.png",
    }),
  ];
}
const OurTeam = () => {
  return (
    <div>
      <Teams />
    </div>
  );
};

export default OurTeam;
