import Social from "../components/Home/Social";
import Data from "../components/Home/Data";
import ScrollDown from "../components/Home/ScrollDown";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img" />

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
