import { useRef } from "react";
import emailjs from "@emailjs/browser"; // eslint-disable-line

function Contact() {
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
      <span className="section__subtitle">Get in touch with me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <img
                src=""
                alt="contact card icon"
                className="contact__card-icon"
              />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                Write me{" "}
                <img
                  src=""
                  alt="contact button icon"
                  className="contact__button-icon"
                />
              </a>
            </div>

            <div className="contact__card">
              <img
                src=""
                alt="contact card icon"
                className="contact__card-icon"
              />

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">999-888-777</span>

              <a href="/" className="contact__button">
                Write me
                <img
                  src=""
                  alt="contact button icon"
                  className="contact__button-icon"
                />
              </a>
            </div>

            <div className="contact__card">
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
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="name"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="name" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="project"
                className="contact__form-input"
                cols="30"
                rows="10"
                placeholder="Write your project"
              />
            </div>

            <button type="submit" className="button button--flex">
              Send Message
              <img src="/assets/icons/send.svg" alt="send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
