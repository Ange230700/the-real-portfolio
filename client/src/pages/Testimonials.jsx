/*
    eslint-disable import/no-unresolved
*/
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

import Data from "../data/Testimonials/Data";

function Testimonials() {
  //   // swiper element
  //   const swiperEl = document.querySelector("swiper-container");

  //   // swiper parameters
  //   const swiperParams = {
  //     // slidesPerView: 1,
  //     grabCursor: true,
  //     spaceBetween: 24,
  //     pagination: {
  //       // el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       576: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 48,
  //       },
  //     },
  //     // modules: [Pagination],
  //     on: {
  //       init() {
  //         // ...
  //       },
  //     },
  //   };

  //   // now we need to assign all parameters to Swiper element
  //   Object.assign(swiperEl, swiperParams);

  //   // and now initialize it
  //   swiperEl.initialize();

  return (
    <section className="testimonial container section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My clients say</span>

      <swiper-container
        className="testimonial__container"
        slides-per-view="3"
        speed="500"
        // loop="true"
        css-mode="true"
        pagination="true"
      >
        {Data.map(({ id, image, title, description }) => (
          <swiper-slide key={id} className="testimonial__card">
            <img
              src={image}
              alt="testimonial card pic"
              className="testimonial__img"
            />

            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

export default Testimonials;
