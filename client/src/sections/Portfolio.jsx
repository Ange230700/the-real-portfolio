import Works from "../components/Portfolio/Works";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <Works />
    </section>
  );
}

export default Portfolio;