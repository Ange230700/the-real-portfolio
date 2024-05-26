import { HashLink } from "react-router-hash-link";

function Introduction() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Ange KOUAKOU{" "}
        <img
          src={`${import.meta.env.VITE_API_URL}/assets/icons/hand.svg`}
          alt="waving hand icon"
          className="home__hand-icon"
        />
      </h1>

      <h3 className="home__subtitle">Développeur web fullstack</h3>

      <p className="home__description">
        Je suis un développeur web fullstack avec une base solide dans les
        technologies frontend et backend. Mon objectif est de mettre à profit
        mes compétences pour contribuer à des solutions innovantes et
        percutantes.
      </p>

      <HashLink to="#contact" className="button button--flex">
        Prenons contact
        {/* <img
          src={`${import.meta.env.VITE_API_URL}/assets/icons/send.svg`}
          alt="send icon"
          className="home__send-icon"
        /> */}
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
      </HashLink>
    </div>
  );
}

export default Introduction;
