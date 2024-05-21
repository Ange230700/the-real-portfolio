import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  // State to toggle the header's active class based on scroll position
  const [headerActive, setHeaderActive] = useState(false);

  // State to toggle the mobile menu visibility
  const [Toggle, showMenu] = useState(false);

  // State to track the active navigation link
  const [activeNav, setActiveNav] = useState("#home");

  // useEffect hook to handle scroll event and toggle header class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHeaderActive(true); // Add scroll-header class when scrolled down
      } else {
        setHeaderActive(false); // Remove scroll-header class when at top
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
  }, []);

  // Navigation links
  const navLinks = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "contact",
  ];

  // Function to capitalize the first letter of a string
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <header className={`header ${headerActive ? "scroll-header" : ""}`}>
      <nav className="nav container">
        {/* Logo link */}
        <a href="index.html" className="nav__logo">
          Ange KOUAKOU
        </a>

        {/* Navigation links */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navLinks.map((navLink) => (
              <li className="nav__item" key={navLink}>
                <HashLink
                  className={
                    activeNav === `#${navLink}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  to={`#${navLink}`}
                  smooth
                  onClick={() => setActiveNav(`#${navLink}`)}
                >
                  <img className="nav__icon" src="" alt={navLink} />
                  {capitalize(navLink)}
                </HashLink>
              </li>
            ))}
          </ul>

          {/* Close button for the mobile menu */}
          <img src="" alt="nav close icon" className="nav__close" />
        </div>

        {/* Toggle button for the mobile menu */}
        <button
          type="button"
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
        >
          <img src="" alt="nav toggle icon" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
