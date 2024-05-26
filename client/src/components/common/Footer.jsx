import { HashLink } from "react-router-hash-link";
import navLinks from "../../data/Header/navLinks";

import GithubIcon from "../../../../server/public/assets/icons/github-footer.svg"; // eslint-disable-line
import LinkedInIcon from "../../../../server/public/assets/icons/in-footer.svg"; // eslint-disable-line
import TwitterIcon from "../../../../server/public/assets/icons/twitter-footer.svg"; // eslint-disable-line

function Footer() {
  // Function to capitalize the first letter of a string
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">KOUAKOU</h1>

        <ul className="footer__list">
          {navLinks.map((navLink) => (
            <li className="footer__item" key={navLink.id}>
              <HashLink
                className="footer__link"
                to={`#${navLink.sectionId}`}
                smooth
              >
                {capitalize(navLink.name)}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          <a
            href="https://github.com/Ange230700"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="social icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ange-kouakou/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="social icon" />
          </a>
          <a
            href="https://twitter.com/AngeEricStepha1"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="social icon" />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Ange KOUAKOU. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
