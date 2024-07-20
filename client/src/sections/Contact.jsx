import PropTypes from "prop-types";
// import { useRef } from "react";
import emailjs from "@emailjs/browser"; // eslint-disable-line
import ScrollDown from "../components/common/ScrollDown";

import MailIcon from "../../../server/public/assets/icons/envelopes.svg"; // eslint-disable-line
import PenIcon from "../../../server/public/assets/icons/pen-clip.svg"; // eslint-disable-line
import PhoneIcon from "../../../server/public/assets/icons/phone-call.svg"; // eslint-disable-line
import MiniPhoneIcon from "../../../server/public/assets/icons/mini-phone-call.svg"; // eslint-disable-line
import SendIcon from "../../../server/public/assets/icons/send.svg"; // eslint-disable-line

function Contact({ navLinks }) {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_2h11k8r", "template_8sf27gv", form.current, {
  //       publicKey: "hU9YtG1cK8tJWjp8c",
  //     })
  //     .then(
  //       (result) => {
  //         console.info("SUCCESS!", result.text);
  //       },
  //       (error) => {
  //         console.error("FAILED...", error.text);
  //       }
  //     );

  //   e.target.reset();
  // };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Contactez-moi</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Adresses</h3>

          <div className="contact__info">
            <a
              href="mailto:kouakouangeericstephane@gmail.com"
              className="contact__card"
            >
              <img
                src={MailIcon}
                alt="contact card icon"
                className="contact__card-icon"
              />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                kouakouangeericstephane@gmail.com
              </span>

              <p className="contact__button">
                Envoyez un mail
                <img
                  src={PenIcon}
                  alt="contact button icon"
                  className="contact__button-icon"
                />
              </p>
            </a>

            <a href="tel:+33751524188" className="contact__card">
              <img
                src={PhoneIcon}
                alt="contact card icon"
                className="contact__card-icon"
              />

              <h3 className="contact__card-title">Téléphone</h3>
              <span className="contact__card-data">+33 7 51 52 41 88</span>

              <p className="contact__button">
                Appelez ce numéro
                <img
                  src={MiniPhoneIcon}
                  alt="contact button icon"
                  className="contact__button-icon"
                />
              </p>
            </a>
          </div>
        </div>

        {/* <div className="contact__content">
          <h3 className="contact__title">Laissez-moi un message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Entrez votre email"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Nom
              </label>
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Entrez votre nom"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="name" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="message"
                className="contact__form-input"
                cols="30"
                rows="10"
                placeholder="Entrez votre message ici..."
              />
            </div>

            <button type="submit" className="button button--flex">
              <p>Envoyer message</p>
              <img src={SendIcon} alt="send" />
            </button>
          </form>
        </div> */}
      </div>

      <ScrollDown navLinks={navLinks} currentId="contact" />
    </section>
  );
}

Contact.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Contact;
