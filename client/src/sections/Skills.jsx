import PropTypes from "prop-types";
import Frontend from "../components/Skills/Frontend";
import Backend from "../components/Skills/Backend";
import ScrollDown from "../components/common/ScrollDown";

function Skills({ navLinks }) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />

        <ScrollDown navLinks={navLinks} currentId="skills" />
      </div>
    </section>
  );
}

Skills.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Skills;
