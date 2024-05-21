import {
  // useEffect,
  useState,
} from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  // fixed header
  //   const [headerActive, setHeaderActive] = useState(false);

  // Detect scroll to toggle header class
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 80) {
  //         setHeaderActive(true);
  //       } else {
  //         setHeaderActive(false);
  //       }
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //   }, []);

  // Toggle mobile menu
  // const [mobile, setMobile] = useState(false);

  /* =========================== Toggle Menu =========================== */
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    // When the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (header.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  /* =========================== Toggle Menu =========================== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    // <header className={`header ${headerActive ? "active-link" : ""}`}>
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Ange
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {/* <li className="nav__item" key="home">
              <HashLink
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                to="#home"
                smooth
                onClick={() => setActiveNav("#home")}
              >
                <img className="nav__icon" src="" alt="home" /> home
              </HashLink>
            </li> */}
            {["home", "about", "services", "portfolio", "contact"].map(
              (item) => (
                <li className="nav__item" key={item}>
                  <HashLink
                    className={
                      activeNav === `#${item}`
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    to={`#${item}`}
                    smooth
                    onClick={() => setActiveNav(`#${item}`)}
                  >
                    <img className="nav__icon" src="" alt={item} /> {item}
                  </HashLink>
                </li>
              )
            )}
          </ul>
          <img src="" alt="nav close" className="nav__close" />
        </div>

        <button
          type="button"
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
        >
          <img src="" alt="nav toggle" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
