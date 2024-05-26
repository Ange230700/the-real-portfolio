import LayersIcon from "../../../../server/public/assets/icons/layers.svg"; // eslint-disable-line
import SkillsIcon from "../../../../server/public/assets/icons/technical-support.svg"; // eslint-disable-line
import ServerIcon from "../../../../server/public/assets/icons/server.svg"; // eslint-disable-line

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <img className="about__icon" src={LayersIcon} alt="award icon" />

        <h3 className="about__title">Tech Stack</h3>
        <span className="about__subtitle">React, Express, Node, MySQL</span>
      </div>

      <div className="about__box">
        <img className="about__icon" src={SkillsIcon} alt="customer icon" />

        <h3 className="about__title">Outils</h3>
        <span className="about__subtitle">Git, VS Code, Postman, Figma</span>
      </div>

      <div className="about__box">
        <img className="about__icon" src={ServerIcon} alt="support icon" />

        <h3 className="about__title">Hébergement</h3>
        <span className="about__subtitle">Vercel, Render, Alwaysdata</span>
      </div>
    </div>
  );
}

export default Info;
