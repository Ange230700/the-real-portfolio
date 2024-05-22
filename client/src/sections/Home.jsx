import PropTypes from "prop-types";
import Social from "../components/Home/Social";
import Introduction from "../components/Home/Introduction";
import ScrollDown from "../components/common/ScrollDown";

function Home({ navLinks }) {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          {/* background url is set in home stylesheet */}
          <div className="home__img" />

          <Introduction />
        </div>

        <ScrollDown
          target="about"
          navLinks={navLinks}
          currentId={navLinks[0].id}
        />
      </div>
    </section>
  );
}

Home.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;
