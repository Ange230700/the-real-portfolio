import PropTypes from "prop-types";
import { useRef } from "react";
import emailjs from "@emailjs/browser"; // eslint-disable-line
import ScrollDown from "../components/common/ScrollDown";

function Contact({ navLinks }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_t1fskir", "template_8sf27gv", form.current, {
      publicKey: "hU9YtG1cK8tJWjp8c",
    });
    //   .then(
    //     () => {
    //       console.info("SUCCESS!");
    //     },
    //     (error) => {
    //       console.error("FAILED...", error.text);
    //     }
    //   );

    e.target.reset();
  };

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
              {/* <img
                src=""
                alt="contact card icon"
                className="contact__card-icon"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                className="contact__card-icon"
              >
                <path d="M19.5,2H7.5c-2.49,0-4.5,2.01-4.5,4.5V15.5c0,2.49,2.01,4.5,4.5,4.5h12c2.49,0,4.5-2.01,4.5-4.5V6.5c0-2.49-2.01-4.5-4.5-4.5Zm0,1c.95,0,1.82,.38,2.45,1l-5.97,5.97c-1.37,1.37-3.58,1.37-4.95,0L5.05,4c.63-.62,1.5-1,2.45-1h12Zm3.5,12.5c0,1.93-1.57,3.5-3.5,3.5H7.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.62,.16-1.19,.44-1.7l5.88,5.88c.88,.88,2.03,1.32,3.18,1.32s2.3-.44,3.18-1.32l5.88-5.88c.28,.5,.44,1.08,.44,1.7V15.5Zm-5,7c0,.28-.22,.5-.5,.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V7.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v11c0,1.93,1.57,3.5,3.5,3.5h13c.28,0,.5,.22,.5,.5Z" />
              </svg>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                kouakouangeericstephane@gmail.com
              </span>

              <p className="contact__button">
                Envoyez un mail
                {/* <img
                  src=""
                  alt="contact button icon"
                  className="contact__button-icon"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path d="M24,2.95c-.04-.88-.47-1.71-1.16-2.28-1.23-1.01-3.12-.86-4.31,.32l-1.99,1.99c-.8-.64-1.78-.99-2.82-.99-1.2,0-2.33,.47-3.18,1.32l-3.03,3.03c-.2,.2-.2,.51,0,.71s.51,.2,.71,0l3.03-3.03c1.21-1.21,3.23-1.31,4.58-.32L1.91,17.64c-.59,.59-.92,1.38-.92,2.22,0,.67,.21,1.31,.59,1.84l-1.45,1.45c-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15l1.45-1.45c.53,.39,1.17,.59,1.84,.59,.84,0,1.63-.33,2.22-.92L23.08,5.33c.63-.63,.96-1.49,.92-2.38ZM5.65,21.37c-.81,.81-2.22,.81-3.03,0-.4-.4-.63-.94-.63-1.51s.22-1.11,.63-1.51L16.56,4.39l3.03,3.03L5.65,21.37ZM22.37,4.62l-2.08,2.08-3.03-3.03,1.97-1.98c.46-.46,1.08-.7,1.67-.7,.47,0,.93,.15,1.29,.45,.48,.39,.76,.94,.79,1.55,.03,.6-.2,1.19-.62,1.62Z" />
                </svg>
              </p>
            </a>

            <a href="tel:+33751524188" className="contact__card">
              {/* <img
                src=""
                alt="contact card icon"
                className="contact__card-icon"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path d="m23.5,11c-.276,0-.5-.224-.5-.5,0-5.238-4.262-9.5-9.5-9.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c5.79,0,10.5,4.71,10.5,10.5,0,.276-.224.5-.5.5Zm-3.5-.5c0-3.584-2.916-6.5-6.5-6.5-.276,0-.5.224-.5.5s.224.5.5.5c3.033,0,5.5,2.467,5.5,5.5,0,.276.224.5.5.5s.5-.224.5-.5Zm2.234,11.771l.978-1.125c.508-.508.788-1.184.788-1.902s-.28-1.395-.837-1.945l-2.446-1.873c-1.048-1.048-2.753-1.049-3.803-.003l-1.532,1.494c-3.68-1.499-6.678-4.5-8.294-8.303l1.488-1.525c1.049-1.049,1.049-2.756.043-3.756l-1.959-2.543c-1.017-1.017-2.813-.993-3.78-.023l-1.174,1.024C.605,2.886,0,4.373,0,5.976c0,7.749,10.275,18.024,18.024,18.024,1.603,0,3.089-.605,4.21-1.729ZM5.909,1.446l1.959,2.543c.659.659.659,1.732-.004,2.396l-1.722,1.766c-.138.142-.18.352-.106.536,1.729,4.305,5.113,7.688,9.286,9.28.182.07.388.027.527-.108l1.766-1.722s.003-.003.004-.005c.639-.64,1.704-.681,2.44.043l2.446,1.873c.659.659.659,1.731-.023,2.416l-.979,1.125c-.908.91-2.144,1.411-3.479,1.411C10.864,23,1,13.136,1,5.976c0-1.335.501-2.571,1.387-3.456l1.175-1.025c.336-.336.779-.5,1.215-.5.419,0,.831.152,1.133.452Z" />
              </svg>

              <h3 className="contact__card-title">Téléphone</h3>
              <span className="contact__card-data">+33 7 51 52 41 88</span>

              <p className="contact__button">
                Appelez ce numéro
                {/* <img
                  src=""
                  alt="contact button icon"
                  className="contact__button-icon"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                >
                  <path d="m23.5,11c-.276,0-.5-.224-.5-.5,0-5.238-4.262-9.5-9.5-9.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c5.79,0,10.5,4.71,10.5,10.5,0,.276-.224.5-.5.5Zm-3.5-.5c0-3.584-2.916-6.5-6.5-6.5-.276,0-.5.224-.5.5s.224.5.5.5c3.033,0,5.5,2.467,5.5,5.5,0,.276.224.5.5.5s.5-.224.5-.5Zm2.234,11.771l.978-1.125c.508-.508.788-1.184.788-1.902s-.28-1.395-.837-1.945l-2.446-1.873c-1.048-1.048-2.753-1.049-3.803-.003l-1.532,1.494c-3.68-1.499-6.678-4.5-8.294-8.303l1.488-1.525c1.049-1.049,1.049-2.756.043-3.756l-1.959-2.543c-1.017-1.017-2.813-.993-3.78-.023l-1.174,1.024C.605,2.886,0,4.373,0,5.976c0,7.749,10.275,18.024,18.024,18.024,1.603,0,3.089-.605,4.21-1.729ZM5.909,1.446l1.959,2.543c.659.659.659,1.732-.004,2.396l-1.722,1.766c-.138.142-.18.352-.106.536,1.729,4.305,5.113,7.688,9.286,9.28.182.07.388.027.527-.108l1.766-1.722s.003-.003.004-.005c.639-.64,1.704-.681,2.44.043l2.446,1.873c.659.659.659,1.731-.023,2.416l-.979,1.125c-.908.91-2.144,1.411-3.479,1.411C10.864,23,1,13.136,1,5.976c0-1.335.501-2.571,1.387-3.456l1.175-1.025c.336-.336.779-.5,1.215-.5.419,0,.831.152,1.133.452Z" />
                </svg>
              </p>
            </a>

            {/* <div className="contact__card">
              <img
                src=""
                alt="contact card icon"
                className="contact__card-icon"
              />

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>

              <a href="/" className="contact__button">
                Write me
                <img
                  src=""
                  alt="contact button icon"
                  className="contact__button-icon"
                />
              </a>
            </div> */}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Laissez-moi un message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="name"
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
                name="name"
                className="contact__form-input"
                placeholder="Entrez votre nom"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="name" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="project"
                className="contact__form-input"
                cols="30"
                rows="10"
                placeholder="Entrez votre message ici..."
              />
            </div>

            <button type="submit" className="button button--flex">
              <p>Envoyer message</p>
              {/* <img src="/assets/icons/send.svg" alt="send" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="13px"
                height="13px"
              >
                <path
                  d="m.172,3.708C-.216,2.646.076,1.47.917.713,1.756-.041,2.951-.211,3.965.282l18.09,8.444c.97.454,1.664,1.283,1.945,2.273H4.048L.229,3.835c-.021-.041-.04-.084-.057-.127Zm3.89,9.292L.309,20.175c-.021.04-.039.08-.054.122-.387,1.063-.092,2.237.749,2.993.521.467,1.179.708,1.841.708.409,0,.819-.092,1.201-.279l18.011-8.438c.973-.456,1.666-1.288,1.945-2.28H4.062Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </form>
        </div>

        <ScrollDown navLinks={navLinks} currentId="contact" />
      </div>
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
