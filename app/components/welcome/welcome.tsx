import { Fragment } from "react/jsx-runtime";
import Hero from "./hero";
import About from "./about";
import CoreValues from "./core-values";
import Testimonials from "./testimonials";

export function Welcome() {
  return (
    <Fragment>
      <Hero />
      <About />
      <CoreValues />
      <Testimonials />
    </Fragment>
  );
}
