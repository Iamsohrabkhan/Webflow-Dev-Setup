import navAnimation from "./animations/navanimation";
import defaultNavbar from "./animations/navanimation/defaultNavbar";
import navbarbackgroundanimation from "./animations/navanimation/navbarbackgroundanimation";
import imageTransition from "./animations/image-transition";
import homeLeave from "./animations/image-transition/homeleave";
import projectLeave from "./animations/image-transition/projectleave";
import barba from "@barba/core";
import scrollToElement from "./utlis/scrolltoElement";
import scrollToTop from "./utlis/scrolltotop";
import instantScroll from "./utlis/instantScroll";
// import findMatchingLink from "./utlis/findmatchinglinks";
import mouseFollower from "./animations/image-transition/mousefollower";
import cursor from "./animations/image-transition/cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import navBackgroundAnimation from "./animations/navanimation/navbarbackgroundanimation";

gsap.registerPlugin(ScrollTrigger);

barba.hooks.enter(({ next }) => {
  let namespace = next.namespace;
  cursor(namespace);
});

barba.hooks.enter(({ next }) => {

  if (next.namespace === "home") {
    const element = document.querySelector("._01-charter");
    instantScroll(element);
  }
});

barba.hooks.beforeEnter(({ next }) => {
  let namespace = next.namespace;
  navBackgroundAnimation(namespace);
  cursor(namespace);
});

barba.init({
  views: [
    {
      namespace: "project",
      beforeEnter({}) {
        instantScroll();
      },
    },
    {
      namespace: "home",
      beforeEnter({ next }) {
        const previousPage = window.sessionStorage.getItem("previousPage");
        // const links = next.container.querySelectorAll(".projects-wrapper a");
        // let rightLink = findMatchingLink(previousPage, links);
        // const parent = rightLink.parentElement;
      },
    },
  ],
  transitions: [
    {
      name: "home-to-project",
      from: { namespace: ["home"] },
      to: { namespace: ["project"] },
      async leave({ current, trigger }) {
        trigger = trigger.parentElement;
        let previousPage = current.url.path;
        window.sessionStorage.setItem("previousPage", previousPage);
        await scrollToElement(trigger);
        await homeLeave(current, trigger);
      },
    },
    {
      name: "project-to-home",
      from: { namespace: ["project"] },
      to: { namespace: ["home"] },
      async leave({ current, next, trigger }) {
        trigger = trigger.parentElement;
        let previousPage = current.url.path;
        window.sessionStorage.setItem("previousPage", previousPage);
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
