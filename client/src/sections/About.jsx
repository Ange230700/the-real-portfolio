import PropTypes from "prop-types";
// import AboutImg from "../../../server/public/assets/images/about.jpg"; // eslint-disable-line
import CV from "../../../server/public/assets/resume.pdf"; // eslint-disable-line
import Info from "../components/About/Info";
import ScrollDown from "../components/common/ScrollDown";

function About({ navLinks }) {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

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
            I have a solid foundation in frontend and backend technologies. I've
            contributed to web projects using modern practices for optimal
            performance and user experience. My goal is to leverage my skills to
            participate in innovative and impactful solutions.
          </p>

          <a download href={CV} className="button button--flex">
            <p>Download CV</p>
            {/* <img src="/assets/icons/files.svg" alt="file pic" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="#ffffff"
            >
              <path d="M7.98,16.11c0,.47-.41,.86-.89,.86h-.83s0-1.72,0-1.72h.84c.48,0,.89,.39,.89,.86Zm7.02-8.11h6.54c-.35-.91-.88-1.75-1.59-2.46l-3.48-3.49c-.71-.71-1.55-1.24-2.46-1.59V7c0,.55,.45,1,1,1Zm-2.91,7.25h-.84v3.5s.84,0,.84,0c.48,0,.89-.39,.89-.86v-1.78c0-.47-.41-.86-.89-.86Zm9.91-4.76v8.51c0,2.76-2.24,5-5,5H7c-2.76,0-5-2.24-5-5V5C2,2.24,4.24,0,7,0h4.51c.16,0,.32,.01,.49,.02V7c0,1.65,1.35,3,3,3h6.98c.01,.16,.02,.32,.02,.49Zm-12.77,5.62c0-1.16-.96-2.11-2.14-2.11h-1.09c-.55,0-1,.45-1,1v4.44c0,.35,.28,.62,.62,.62s.62-.28,.62-.62v-1.22h.84c1.18,0,2.14-.95,2.14-2.11Zm5,0c0-1.16-.96-2.11-2.14-2.11h-1.09c-.55,0-1,.45-1,1v4.44c0,.35,.28,.56,.62,.56s1.46,0,1.46,0c1.18,0,2.14-.95,2.14-2.11v-1.78Zm4.79-1.48c0-.35-.28-.62-.62-.62h-2.31c-.35,0-.62,.28-.62,.62v4.81c0,.35,.28,.62,.62,.62s.62-.28,.62-.62v-1.8h1.24c.35,0,.62-.28,.62-.62s-.28-.62-.62-.62h-1.24v-1.14h1.69c.35,0,.62-.28,.62-.62Z" />
            </svg>
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
