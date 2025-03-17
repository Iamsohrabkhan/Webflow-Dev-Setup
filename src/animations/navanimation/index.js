import menuClose from "./menu-close";
import menuOpen from "./menu-open";
import imageshover from "./imageshover";

const navAnimation = () => {
  const hamburger = document.querySelector(".hamburger");
  const cross = document.querySelector(".cross-icon");

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };

  hamburger.addEventListener("click", () => {
    menuOpen();
    disableScroll();
  });

  cross.addEventListener("click", () => {
    menuClose();
    enableScroll();
  });

  imageshover();
};

export default navAnimation;
