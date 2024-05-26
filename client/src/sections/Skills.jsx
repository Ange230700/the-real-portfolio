import PropTypes from "prop-types";
import Frontend from "../components/Skills/Frontend";
import Backend from "../components/Skills/Backend";
import ScrollDown from "../components/common/ScrollDown";

function Skills({ navLinks }) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Savoir et savoir-faire</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />

        <ScrollDown navLinks={navLinks} currentId="compétences" />
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
