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
  const [Toggle, showMenu] = useState(false);

  return (
    // <header className={`header ${headerActive ? "active-link" : ""}`}>
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Ange
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item" key="home">
              <HashLink
                className="nav__link active-link"
                to="#home"
                smooth
                // onClick={() => setMobile(false)}
              >
                <img className="nav__icon" src="" alt="home" /> home
              </HashLink>
            </li>
            {[
              // "Home",
              "about",
              "services",
              "portfolio",
              "contact",
            ].map((item) => (
              <li className="nav__item" key={item}>
                <HashLink
                  className="nav__link"
                  to={`#${item}`}
                  smooth
                  // onClick={() => setMobile(false)}
                >
                  <img className="nav__icon" src="" alt={item} /> {item}
                </HashLink>
              </li>
            ))}
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
