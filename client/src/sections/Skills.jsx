// client\src\sections\Skills.jsx

// import PropTypes from "prop-types";
import Frontend from "../components/Skills/Frontend";
import Backend from "../components/Skills/Backend";
// import ScrollDown from "../components/common/ScrollDown";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Savoir et savoir-faire</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>

      {/* <ScrollDown navLinks={navLinks} currentId="skills" /> */}
    </section>
  );
}

// Skills.propTypes = {
// navLinks: PropTypes.arrayOf(
// PropTypes.shape({
// name: PropTypes.string,
// })
// ).isRequired,
// };

export default Skills;
