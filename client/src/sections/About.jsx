// client\src\sections\About.jsx

// import PropTypes from "prop-types";
// import AboutImg from "../../../server/public/assets/images/my_pic.jpeg"; // eslint-disable-line
import CV from "../../../server/public/assets/resume.pdf"; // eslint-disable-line
import Info from "../components/About/Info";
// import ScrollDown from "../components/common/ScrollDown";

import PdfIcon from "../../../server/public/assets/icons/files.svg"; // eslint-disable-line

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">En savoir plus</h2>
      <span className="section__subtitle">Introduction</span>

      <div className="about__container container grid">
        {/* <img
          src={AboutImg}
          alt="about pic"
          className="about__img"
        /> */}

        <div className="about__data">
          <Info />

          <p className="about__description">
            Depuis toujours, l’internet m’inspire par son accès illimité au
            savoir et la connectivité qu’il offre. Au lycée, j’ai découvert la
            programmation avec le langage C, transformant les concepts
            mathématiques en solutions concrètes.
          </p>
          <p className="about__description">
            Aujourd’hui, après une immersion de 5 mois en développement web à la
            Wild Code School et une formation continue à l’ADA Tech School, je
            maîtrise aussi bien le frontend que le backend avec des technologies
            telles que JavaScript et PHP. J’ai déjà participé à plusieurs
            projets passionnants – par exemple, un site pour afficher les
            enquêtes FBI, une application de quiz, un traducteur Morse et un jeu
            de logique.
          </p>
          <p className="about__description">
            Je recherche actuellement un contrat d’apprentissage de 12 à 36 mois
            (4 jours en entreprise – 1 jour en formation) à partir de juin 2025,
            afin de contribuer à des projets innovants tout en poursuivant ma
            montée en compétences vers une certification RNCP de niveau 6, avec
            l’objectif ultime de devenir architecte logiciel certifié.
          </p>

          <a download href={CV} className="button button--flex">
            <p>Télécharger CV</p>
            <img src={PdfIcon} alt="file pic" />
          </a>
        </div>
      </div>

      {/* <ScrollDown navLinks={navLinks} currentId="about" /> */}
    </section>
  );
}

// About.propTypes = {
// navLinks: PropTypes.arrayOf(
// PropTypes.shape({
// name: PropTypes.string,
// })
// ).isRequired,
// };

export default About;
