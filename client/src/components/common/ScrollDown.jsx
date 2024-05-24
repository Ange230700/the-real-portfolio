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
          {/* <img
            src={`${import.meta.env.VITE_API_URL}/assets/icons/chevron-double-down.svg`}
            alt="scroll icon"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-circle-down"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M23.148,11.973l-9.38,9.295c-.944,.945-2.589,.947-3.537-.002L.852,11.973c-.196-.194-.513-.192-.707,.004-.194,.195-.193,.513,.003,.707l9.377,9.291c.661,.661,1.54,1.025,2.475,1.025s1.814-.364,2.473-1.023l9.379-9.293c.196-.194,.197-.512,.003-.707-.194-.196-.51-.198-.707-.004Z" />
            <path d="M23.149,1.644L13.06,11.561c-.565,.566-1.551,.569-2.124-.003L.851,1.644c-.198-.194-.514-.192-.707,.006-.194,.197-.191,.514,.006,.707L10.232,12.268c.472,.473,1.1,.732,1.768,.732s1.296-.26,1.765-.729L23.851,2.356c.197-.193,.2-.51,.006-.707-.193-.198-.51-.2-.707-.006Z" />
          </svg>
          <span className="home__scroll-name">Scroll down</span>
          {/* <img src="" alt="scroll arrow" className="home__scroll-arrow" /> */}
          {/* <img src="" alt="scroll arrow" className="home__scroll-arrow" /> */}
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
