import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

function ScrollDown({ navLinks, currentId }) {
  // Function to determine the next section
  const getNextSection = () => {
    const currentIndex = navLinks.findIndex((link) => link.name === currentId);
    if (currentIndex !== -1 && currentIndex < navLinks.length - 1) {
      return navLinks[currentIndex + 1].name;
    }
    return null; // No next section available
  };

  const nextSection = getNextSection();

  return (
    <div className="home__scroll">
      {nextSection ? (
        <HashLink
          to={`#${nextSection}`}
          className="home__scroll-button button--flex"
        >
          <img src="" alt="scroll icon" />
          <span className="home__scroll-name">Scroll down</span>
          <img src="" alt="scroll arrow" className="home__scroll-arrow" />
        </HashLink>
      ) : null}
    </div>
  );
}

ScrollDown.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  currentId: PropTypes.string.isRequired,
};

export default ScrollDown;
