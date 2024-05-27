import { HashLink } from "react-router-hash-link";

import HandIcon from "../../../../server/public/assets/icons/hand.svg"; // eslint-disable-line
import SendIcon from "../../../../server/public/assets/icons/send.svg"; // eslint-disable-line

function Introduction() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Ange KOUAKOU{" "}
        <img
          src={HandIcon}
          alt="waving hand icon"
          className="home__hand-icon"
        />
      </h1>

      <h3 className="home__subtitle">Développeur web fullstack</h3>

      <p className="home__description">
        Je suis un développeur web fullstack avec une base solide dans les
        technologies frontend et backend. Mon objectif est de mettre à profit
        mes compétences pour contribuer à des solutions innovantes et
        percutantes.
      </p>

      <HashLink to="#contact" className="button button--flex">
        Prenons contact
        <img src={SendIcon} alt="send icon" className="home__send-icon" />
      </HashLink>
    </div>
  );
}

export default Introduction;
