// client\src\sections\Portfolio.jsx

// import PropTypes from "prop-types";
import Works from "../components/Portfolio/Works";
// import ScrollDown from "../components/common/ScrollDown";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Projets & Réalisations</span>
      <Works />

      {/* <ScrollDown navLinks={navLinks} currentId="portfolio" /> */}
    </section>
  );
}

// Portfolio.propTypes = {
  // navLinks: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string,
  //   })
  // ).isRequired,
// };

export default Portfolio;
