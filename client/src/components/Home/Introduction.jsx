import { HashLink } from "react-router-hash-link";

function Introduction() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Ange KOUAKOU <img src="/assets/icons/hand.svg" alt="hand icon" />
      </h1>

      <h3 className="home__subtitle">Visual Designer</h3>

      <p className="home__description">
        I'm creative designer based in New York, and I'm very passionate and
        dedicated to my work.
      </p>

      <HashLink to="#contact" className="button button--flex">
        Say Hello
        <img src="/assets/icons/send.svg" alt="send icon" />
      </HashLink>
    </div>
  );
}

export default Introduction;
