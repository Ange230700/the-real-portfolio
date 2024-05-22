import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import navLinks from "../../data/Header/navLinks";

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

  // Function to capitalize the first letter of a string
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className={`header ${headerActive ? "scroll-header" : ""}`}>
      <nav className="nav container">
        {/* Logo link */}
        <Link to="/" className="nav__logo">
          Ange KOUAKOU
        </Link>

        {/* Navigation links */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navLinks.map((navLink) => (
              <li className="nav__item" key={navLink.id}>
                <HashLink
                  className={
                    activeNav === `#${navLink.name}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  to={`#${navLink.name}`}
                  smooth
                  onClick={() => setActiveNav(`#${navLink.name}`)}
                >
                  <img className="nav__icon" src="" alt={navLink.name} />
                  {capitalize(navLink.name)}
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
