/*
  eslint-disable jsx-a11y/anchor-is-valid
*/

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
      {/* <img className="scrollup__icon" src="" alt="scroll up" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Bold"
        viewBox="0 0 24 24"
        width="45"
        height="45"
        fill="#fff"
      >
        <path d="M6.414,15.586H17.586a1,1,0,0,0,.707-1.707L12.707,8.293a1,1,0,0,0-1.414,0L5.707,13.879A1,1,0,0,0,6.414,15.586Z" />
      </svg>
    </a>
  );
}

export default ScrollUp;
