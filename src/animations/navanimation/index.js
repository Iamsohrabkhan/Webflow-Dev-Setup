import menuClose from "./menu-close";
import menuOpen from "./menu-open";
import imageshover from "./imageshover";
// import lockScroll from "../smooth/lockscroll";
// import unlockScroll from "../smooth/unlockscroll";

const navAnimation = () => {
  const hamburger = document.querySelector(".hamburger");
  const cross = document.querySelector(".cross-icon");
  // hamburger.style.setProperty("z-index", "9999", "important");
  hamburger.addEventListener("click", () => {
    menuOpen();
    // lockScroll();
  });
  cross.addEventListener("click", () => {
    menuClose();
    console.log("cross click");
    // unlockScroll();
  });
  imageshover();
};

export default navAnimation;
