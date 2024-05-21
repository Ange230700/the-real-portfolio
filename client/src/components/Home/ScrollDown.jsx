function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <img src="/assets/icons/scroll.svg" alt="scroll button" />
        <span className="home__scroll-name">Scroll down</span>
        <img
          src="/assets/icons/"
          alt="scroll arrow"
          className="home__scroll-arrow"
        />
      </a>
    </div>
  );
}

export default ScrollDown;
