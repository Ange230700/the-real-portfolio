import AboutImg from "../../../server/public/assets/images/about.jpg"; // eslint-disable-line
import CV from "../../../server/public/assets/John-Cv.pdf"; // eslint-disable-line
import Info from "../components/About/Info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about pic" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV <img src="/assets/icons/files.svg" alt="file pic" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
