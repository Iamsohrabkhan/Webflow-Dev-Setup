import menuClose from "./menu-close";
import menuOpen from "./menu-open";
import imageshover from "./imageshover";

const navAnimation = () => {
  const hamburger = document.querySelector(".hamburger");
  const cross = document.querySelector(".cross-icon");
  hamburger.style.setProperty("z-index", "9999", "important");
  hamburger.addEventListener("click", () => {
    console.log("hamburger click");

    menuOpen();
  });
  cross.addEventListener("click", () => {
    menuClose();
    console.log("cross click");
  });
  imageshover();
};

export default navAnimation;
