// client\src\components\common\ScrollDown.jsx

import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

import DownIcon from "../../../../server/public/assets/icons/chevron-double-down.svg"; // eslint-disable-line

function ScrollDown({ navLinks, currentId }) {
  // Function to determine the next section
  const getNextSection = () => {
    const currentIndex = navLinks.findIndex(
      (link) => link.sectionId === currentId
    );
    if (currentIndex !== -1 && currentIndex < navLinks.length - 1) {
      return navLinks[currentIndex + 1].sectionId;
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
          <img src={DownIcon} alt="scroll icon" className="home__scroll-icon" />
          <span className="home__scroll-name">
            Passer à la section suivante
          </span>
        </HashLink>
      ) : null}
    </div>
  );
}

ScrollDown.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sectionId: PropTypes.string,
    })
  ).isRequired,
  currentId: PropTypes.string.isRequired,
};

export default ScrollDown;
