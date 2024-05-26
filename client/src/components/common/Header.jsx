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
                    activeNav === `#${navLink.sectionId}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  to={`#${navLink.sectionId}`}
                  smooth
                  onClick={() => setActiveNav(`#${navLink.sectionId}`)}
                >
                  <img
                    className="nav__icon"
                    src={navLink.icon}
                    alt={navLink.name}
                  />
                  {capitalize(navLink.name)}
                </HashLink>
              </li>
            ))}
          </ul>

          {/* Close button for the mobile menu */}
          {Toggle && (
            <button
              type="button"
              className="nav__close"
              onClick={() => showMenu(false)}
            >
              {/* <img src="" alt="nav close icon" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path d="m15.854,8.854l-3.146,3.146,3.146,3.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-3.146-3.146-3.146,3.146c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.146-3.146-3.146-3.146c-.195-.195-.195-.512,0-.707s.512-.195.707,0l3.146,3.146,3.146-3.146c.195-.195.512-.195.707,0s.195.512,0,.707Zm8.146,3.146c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z" />
              </svg>
            </button>
          )}
        </div>

        {/* Toggle button for the mobile menu */}
        {!Toggle && (
          <button
            type="button"
            className="nav__toggle"
            onClick={() => showMenu(true)}
          >
            {/* <img src="" alt="nav toggle icon" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 490.667 490.667"
              style={{ enableBackground: "new 0 0 490.667 490.667" }}
              xmlSpace="preserve"
              width="40"
              height="40"
            >
              <g>
                <path d="M469.333,224h-448C9.551,224,0,233.551,0,245.333c0,11.782,9.551,21.333,21.333,21.333h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,233.551,481.115,224,469.333,224z" />
                <path d="M21.333,117.333h448c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551,74.667,0,84.218,0,96   S9.551,117.333,21.333,117.333z" />
                <path d="M469.333,373.333h-448C9.551,373.333,0,382.885,0,394.667C0,406.449,9.551,416,21.333,416h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,382.885,481.115,373.333,469.333,373.333z" />
              </g>
            </svg>
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
