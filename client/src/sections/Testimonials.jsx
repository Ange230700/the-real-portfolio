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
import ScrollDown from "../components/common/ScrollDown";

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
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My clients say</span>

      <div className="testimonials__container container grid">
        <swiper-container
          className="testimonials__container"
          slides-per-view="3"
          speed="500"
          // loop="true"
          css-mode="true"
          pagination="true"
        >
          {Data.map(({ id, image, title, description }) => (
            <swiper-slide key={id} className="testimonials__card">
              <img
                src={image}
                alt="testimonials card pic"
                className="testimonials__img"
              />

              <h3 className="testimonials__name">{title}</h3>
              <p className="testimonials__description">{description}</p>
            </swiper-slide>
          ))}
        </swiper-container>

        <ScrollDown target="contact" />
      </div>
    </section>
  );
}

export default Testimonials;
