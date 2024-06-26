/*
  eslint-disable jsx-a11y/anchor-is-valid
*/

import ScrollUpIcon from "../../../../server/public/assets/icons/caret-up.svg"; // eslint-disable-line

function ScrollUp() {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (scrollUp.scrollTop > 560 || document.documentElement.scrollTop > 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });

  return (
    <a href="#" className="scrollup">
      <img className="scrollup__icon" src={ScrollUpIcon} alt="scroll up" />
    </a>
  );
}

export default ScrollUp;
