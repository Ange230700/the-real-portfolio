import { HashLink } from "react-router-hash-link";

function ScrollDown() {
  return (
    <div className="home__scroll">
      <HashLink to="#about" className="home__scroll-button button--flex">
        <img src="/assets/icons/scroll.svg" alt="scroll icon" />
        <span className="home__scroll-name">Scroll down</span>
        <img
          src="/assets/icons/"
          alt="scroll arrow"
          className="home__scroll-arrow"
        />
      </HashLink>
    </div>
  );
}

export default ScrollDown;
