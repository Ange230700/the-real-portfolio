// client\src\sections\Testimonials.jsx

// import PropTypes from "prop-types";
import { useEffect } from "react";
import { register } from "swiper/element"; // eslint-disable-line
import Data from "../data/Testimonials/Data";
// import ScrollDown from "../components/common/ScrollDown";
import "swiper/css"; // eslint-disable-line
import "swiper/css/pagination"; // eslint-disable-line

function Testimonials() {
  useEffect(() => {
    // Register Swiper custom elements
    register();
  }, []);

  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">My clients say</span>

      <swiper-container
        className="testimonials__container"
        loop="true"
        grab-cursor="true"
        space-between="24"
        pagination="true"
        breakpoints='{
            "576": {
              "slidesPerView": 2
            },

            "768": {
              "slidesPerView": 2,
              "spaceBetween": 48
            }
          }'
        dots="true"
      >
        {Data.map(
          ({
            id,
            // image,
            title,
            description,
          }) => (
            <swiper-slide key={id} className="testimonials__card">
              <img
                // src={image}
                src=""
                alt="testimonials card pic"
                className="testimonials__img"
              />

              <h3 className="testimonials__name">{title}</h3>
              <p className="testimonials__description">{description}</p>
            </swiper-slide>
          )
        )}
      </swiper-container>

      {/* <ScrollDown navLinks={navLinks} currentId="testimonials" /> */}
    </section>
  );
}

// Testimonials.propTypes = {
// navLinks: PropTypes.arrayOf(
// PropTypes.shape({
// name: PropTypes.string,
// })
// ).isRequired,
// };

export default Testimonials;
