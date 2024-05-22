import Social from "../components/Home/Social";
import Introduction from "../components/Home/Introduction";
import ScrollDown from "../components/common/ScrollDown";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          {/* background url is set in home stylesheet */}
          <div className="home__img" />

          <Introduction />
        </div>

        <ScrollDown target="about" />
      </div>
    </section>
  );
}

export default Home;
