import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

function ScrollDown({ target }) {
  return (
    <div className="home__scroll">
      <HashLink to={`#${target}`} className="home__scroll-button button--flex">
        <img src="" alt="scroll icon" />
        <span className="home__scroll-name">Scroll down</span>
        <img src="" alt="scroll arrow" className="home__scroll-arrow" />
      </HashLink>
    </div>
  );
}

ScrollDown.propTypes = {
  target: PropTypes.string.isRequired,
};

export default ScrollDown;
