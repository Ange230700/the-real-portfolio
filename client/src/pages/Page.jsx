import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Services from "../sections/Services";
import Qualification from "../sections/Qualification";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import navLinks from "../data/Header/navLinks";

function Page() {
  return (
    <>
      <Home navLinks={navLinks} />
      <About navLinks={navLinks} />
      <Skills navLinks={navLinks} />
      <Services navLinks={navLinks} />
      <Qualification navLinks={navLinks} />
      <Testimonials navLinks={navLinks} />
      <Portfolio navLinks={navLinks} />
      <Contact navLinks={navLinks} />
    </>
  );
}

export default Page;
