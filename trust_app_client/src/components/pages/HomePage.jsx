import About from "../About";
import { Gallery } from "../Gallery";
import Hero from "../Hero";
import Programs from "../Programs";
import Team from "../Team";


export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      {/* <Gallery /> */}
      <Team />
    </>
  );
}
