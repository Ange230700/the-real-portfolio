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
          {navLinks.map((navLink) => (
            <li className="footer__item" key={navLink.id}>
              <HashLink className="footer__link" to={`#${navLink.name}`} smooth>
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
            {/* <img src="" alt="social icon" /> */}
            <svg
              id="Layer_1"
              enableBackground="new 0 0 152 152"
              height="40"
              viewBox="0 0 152 152"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path
                id="Icon"
                d="m53.1 141c4.6 0 5.9-1.8 5.9-4.1s0-7.3-.1-14.4c-23.9 5.1-29-11.4-29-11.4-3.9-9.7-9.6-12.4-9.6-12.4-7.8-5.2.6-5.1.6-5.1 8.6.6 13.2 8.7 13.2 8.7 7.7 13 20.1 9.2 25 7 .4-4.3 2.3-8.4 5.5-11.4-19.1-2.1-39.2-9.4-39.2-41.8-.1-8.4 3.1-16.6 8.9-22.7-1-2.1-3.9-10.7.7-22.4 0 0 7.2-2.3 23.7 8.7 14.1-3.8 28.9-3.8 43 0 16.3-10.9 23.6-8.7 23.6-8.7 4.6 11.6 1.7 20.2.9 22.4 5.8 6.1 8.9 14.3 8.8 22.7 0 32.5-20.1 39.6-39.3 41.7 3 2.5 5.8 7.7 5.8 15.6 0 11.4-.1 20.4-.1 23.1 0 2.2 1 4 5.9 4z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ange-kouakou/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src="" alt="social icon" /> */}
            <svg
              height="40"
              viewBox="-8 0 512 512"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="m111.398438 160.664062h-96.398438c-8.285156 0-15 6.71875-15 15v321.335938c0 8.285156 6.714844 15 15 15h96.398438c8.285156 0 15-6.714844 15-15v-321.335938c0-8.28125-6.714844-15-15-15zm0 0" />
              <path d="m63.203125 0c-34.851563 0-63.203125 28.351562-63.203125 63.195312 0 34.851563 28.351562 63.199219 63.203125 63.199219 34.847656 0 63.195313-28.351562 63.195313-63.199219 0-34.84375-28.347657-63.195312-63.195313-63.195312zm0 0" />
              <path d="m352.410156 158.542969c-22.800781 0-45.273437 5.496093-65.398437 15.777343-.683594-7.652343-7.109375-13.65625-14.941407-13.65625h-96.40625c-8.28125 0-15 6.71875-15 15v321.335938c0 8.285156 6.71875 15 15 15h96.40625c8.285157 0 15-6.714844 15-15v-176.734375c0-22.734375 18.496094-41.230469 41.234376-41.230469 22.730468 0 41.226562 18.496094 41.226562 41.230469v176.734375c0 8.285156 6.71875 15 15 15h96.402344c8.285156 0 15-6.714844 15-15v-194.933594c0-79.140625-64.382813-143.523437-143.523438-143.523437zm0 0" />
            </svg>
          </a>
          <a
            href="https://twitter.com/AngeEricStepha1"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src="" alt="social icon" /> */}
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" // eslint-disable-line
              x="0px"
              y="0px"
              viewBox="0 0 511.999 511.999"
              style={{ enableBackground: "new 0 0 511.999 511.999" }}
              xmlSpace="preserve"
              height={40}
              width={40}
              fill="#fff"
            >
              <g>
                <g>
                  <path
                    d="M509.738,109.538c-3.027-4.924-8.566-7.715-14.332-7.215l-25.53,2.224l24.403-49.193
			c2.906-5.859,1.758-12.918-2.854-17.555c-4.614-4.637-11.666-5.819-17.539-2.943l-64.587,31.631
			c-39.903-21.066-89.756-14.813-124.06,16.436c-28.63,26.08-43.679,66.187-40.873,106.183
			c-74.829-7.5-138.169-50.331-175.623-119.537c-2.485-4.591-7.144-7.594-12.351-7.963c-5.217-0.363-10.243,1.949-13.349,6.146
			c-23.23,31.382-24.86,74.41-6.649,109.809c-5.02-1.268-10.362-2.984-16.286-4.963c-5.075-1.697-10.67-0.61-14.743,2.862
			s-6.031,8.823-5.16,14.104c7.206,43.688,32.682,77.264,72.926,97.138c-5.24,1.825-10.587,3.307-16.024,4.44
			c-5.402,1.126-9.776,5.078-11.441,10.339c-1.665,5.26-0.363,11.01,3.407,15.039c28.981,30.978,70.845,46.225,100.581,53.539
			c-33.81,26.477-70.307,30.908-123.341,29.087c-6.139-0.186-11.795,3.272-14.376,8.837c-2.58,5.566-1.579,12.136,2.544,16.681
			c22.108,24.369,102.654,51.847,187.326,53.907c3.349,0.081,6.765,0.125,10.253,0.125c59.451-0.001,138.022-12.745,194.419-69.142
			c42.687-42.686,69.387-91.827,79.356-146.053c8.052-43.797,2.963-78.869,0.518-95.725c-0.18-1.239-0.372-2.554-0.528-3.704
			l23.881-38.49C512.752,120.672,512.765,114.462,509.738,109.538z"
                  />
                </g>
              </g>
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
              <g></g> {/* eslint-disable-line */}
            </svg>
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
