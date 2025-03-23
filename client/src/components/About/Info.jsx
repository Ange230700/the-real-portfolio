// client\src\components\About\Info.jsx

import LayersIcon from "../../../../server/public/assets/icons/layers.svg"; // eslint-disable-line
import SkillsIcon from "../../../../server/public/assets/icons/technical-support.svg"; // eslint-disable-line
import ServerIcon from "../../../../server/public/assets/icons/server.svg"; // eslint-disable-line

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <img className="about__icon" src={LayersIcon} alt="award icon" />

        <h3 className="about__title">Tech Stack</h3>
        <ul>
          <li className="about__subtitle">React</li>
          <li className="about__subtitle">Express</li>
          <li className="about__subtitle">Node</li>
          <li className="about__subtitle">MySQL</li>
        </ul>
      </div>

      <div className="about__box">
        <img className="about__icon" src={SkillsIcon} alt="customer icon" />

        <h3 className="about__title">Outils</h3>
        <ul>
          <li className="about__subtitle">Git</li>
          <li className="about__subtitle">VSCode</li>
          <li className="about__subtitle">Postman</li>
          <li className="about__subtitle">Figma</li>
          <li className="about__subtitle">GPT-o1</li>
        </ul>
      </div>

      <div className="about__box">
        <img className="about__icon" src={ServerIcon} alt="support icon" />

        <h3 className="about__title">Hébergement</h3>
        {/* <span className="about__subtitle">Vercel, Render, Alwaysdata</span> */}
        <ul>
          <li className="about__subtitle">WinSCP</li>
          <li className="about__subtitle">puttY</li>
          <li className="about__subtitle">Vercel</li>
          <li className="about__subtitle">Render</li>
          <li className="about__subtitle">Alwaysdata</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
