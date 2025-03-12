import menuClose from "./menu-close";
import menuOpen from "./menu-open";
import imageshover from "./imageshover";

const navAnimation = () => {
  
  const hamburger = document.querySelector(".hamburger");
  const cross = document.querySelector(".cross-icon");
  hamburger.addEventListener("click", () => {
    menuOpen();
  });
  cross.addEventListener("click", () => {
    menuClose();
  });
  imageshover();
};

export default navAnimation;
