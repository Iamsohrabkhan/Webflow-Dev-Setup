import navAnimation from "./animations/navanimation";
import imageTransition from "./animations/image-transition";
import homeLeave from "./animations/image-transition/homeleave";
import projectLeave from "./animations/image-transition/projectleave";
import barba from "@barba/core";
import scrollToElement from "./utlis/scrolltoElement";
import scrollToTop from "./utlis/scrolltotop";
import instantScroll from "./utlis/instantScroll";
import cursor from "./animations/image-transition/cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import navBackgroundAnimation from "./animations/navanimation/navbarbackgroundanimation";
import convertToAnchor from "./utlis/converttoanchor";
import checkRoute from "./utlis/checkRoute";
// import smoothScroll from "./animations/scroll/smoothscroll";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  navAnimation();
  imageTransition();

  let navbar = document.querySelector(".navbar-home");
  if (navbar) {
    const navHeight = navbar.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--nav-height",
      `${navHeight}px`
    );
  }
});
window.addEventListener("load", () => {
  window.scrollTo(0, 0);  
});

let prevLink = null;
barba.hooks.beforeEnter(({ next, trigger }) => {
  let namespace = next.namespace;
  cursor(namespace);
  navBackgroundAnimation(namespace);
  convertToAnchor();
  if (prevLink) {
    let i = checkRoute(prevLink);
    const element = document.querySelectorAll("._01-charter")[i];
    instantScroll(element);
  }
});
barba.init({
  views: [
    {
      namespace: "project",
      beforeEnter() {
        instantScroll();
      },
      beforeLeave({ current }) {
        prevLink = current.url.path;
      },
    },
  ],
  transitions: [
    {
      name: "home-to-project",
      from: { namespace: ["home"] },
      to: { namespace: ["project"] },
      async leave({ current, trigger }) {
        let targetTrigger = trigger.classList.contains("feature-section")
        ? trigger
        : trigger.closest(".feature-section");
        await scrollToElement(targetTrigger);
        await homeLeave(current, targetTrigger);
      },
    },
    {
      name: "project-to-home",
      from: { namespace: ["project"] },
      to: { namespace: ["home"] },
      async leave({ current, trigger }) {
        await scrollToTop();
        let targetTrigger = trigger.classList.contains("content-wrapper")
        ? trigger
        : trigger.closest(".content-wrapper");
        await projectLeave(current, targetTrigger);
      },
    },
  ],
});
