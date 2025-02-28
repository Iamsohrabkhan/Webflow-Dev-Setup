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

gsap.registerPlugin(ScrollTrigger);
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
        await homeLeave(current, trigger);
      },
    },
    {
      name: "project-to-home",
      from: { namespace: ["project"] },
      to: { namespace: ["home"] },
      async leave({ current, trigger }) {
        await scrollToTop();
        await projectLeave(current, trigger);
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", () => {
  navAnimation();
  imageTransition();
});
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
