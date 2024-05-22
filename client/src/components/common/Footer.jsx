import { HashLink } from "react-router-hash-link";
import navLinks from "../../data/Header/navLinks";

function Footer() {
  // Function to capitalize the first letter of a string
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">KOUAKOU</h1>

        <ul className="footer__list">
          {/* <li className="footer__item">
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li className="footer__item">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li className="footer__item">
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li className="footer__item">
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li> */}

          {navLinks.map((navLink) => (
            <li className="footer__item" key={navLink.id}>
              <HashLink className="footer__link" to={`#${navLink.name}`} smooth>
                {capitalize(navLink.name)}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          <a href="/" className="footer__social-link" target="_blank">
            <img src="" alt="social icon" />
          </a>
          <a href="/" className="footer__social-link" target="_blank">
            <img src="" alt="social icon" />
          </a>
          <a href="/" className="footer__social-link" target="_blank">
            <img src="" alt="social icon" />
          </a>
        </div>

        <span className="footer__copy">&#169; Ange. All rigths reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
