import PropTypes from "prop-types";
// import AboutImg from "../../../server/public/assets/images/about.jpg"; // eslint-disable-line
import CV from "../../../server/public/assets/resume.pdf"; // eslint-disable-line
import Info from "../components/About/Info";
import ScrollDown from "../components/common/ScrollDown";

import PdfIcon from "../../../server/public/assets/icons/files.svg"; // eslint-disable-line

function About({ navLinks }) {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">En savoir plus</h2>
      <span className="section__subtitle">Introduction</span>

      <div className="about__container container grid">
        <img
          // src={AboutImg}
          src={`
            ${import.meta.env.VITE_API_URL}/assets/images/my_pic.jpeg
            `}
          alt="about pic"
          className="about__img"
        />

        <div className="about__data">
          <Info />

          <p className="about__description">
            J'ai une base solide dans les technologies frontend et backend. J'ai
            contribué à des projets web en utilisant des pratiques modernes pour
            une performance et une expérience utilisateur optimales. Mon
            objectif est de mettre à profit mes compétences pour participer à
            des solutions innovantes et impactantes.
          </p>

          <a download href={CV} className="button button--flex">
            <p>Télécharger CV</p>
            <img src={PdfIcon} alt="file pic" />
          </a>
        </div>

        <ScrollDown navLinks={navLinks} currentId="about" />
      </div>
    </section>
  );
}

About.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default About;
