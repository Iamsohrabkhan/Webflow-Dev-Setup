import menuClose from "./menu-close";
import menuOpen from "./menu-open";
import imageshover from "./imageshover";
// import lockScroll from "../smooth/lockscroll";
// import unlockScroll from "../smooth/unlockscroll";

const navAnimation = () => {
  console.log("nav animaiton loaded");
  
  const hamburger = document.querySelector(".hamburger");
  const cross = document.querySelector(".cross-icon");
  // hamburger.style.setProperty("z-index", "9999", "important");
  hamburger.addEventListener("click", () => {
    menuOpen();
    // lockScroll();
  });
  cross.addEventListener("click", () => {
    menuClose();
    // unlockScroll();
  });
  imageshover();
};

export default navAnimation;
