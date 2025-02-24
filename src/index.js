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

gsap.registerPlugin(ScrollTrigger);

barba.hooks.beforeEnter(({ next }) => {
  let namespace = next.namespace;
  cursor(namespace);
  // const element = document.querySelector("._01-charter");
  // instantScroll(element);
});

barba.hooks.beforeEnter(({ next }) => {
  if (next.namespace === "home") {
    // const element = document.querySelector("._01-charter");
    // instantScroll(element);
  }
});

barba.hooks.beforeEnter(({ next }) => {
  let namespace = next.namespace;
  cursor(namespace);
  navBackgroundAnimation(namespace);
  convertToAnchor();
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
        // const previousPage = window.sessionStorage.getItem("previousPage");
        // const links = next.container.querySelectorAll(".projects-wrapper a");
        // let rightLink = findMatchingLink(previousPage, links);
        // const parent = rightLink.parentElement;

        

        const element = document.querySelector("._01-charter");
        instantScroll(element);
      },
    },
  ],
  transitions: [
    {
      name: "home-to-project",
      from: { namespace: ["home"] },
      to: { namespace: ["project"] },
      async leave({ current, trigger }) {
        const charter = document.querySelector("._01-charter");
        // let previousPage = current.url.path;
        // window.sessionStorage.setItem("previousPage", previousPage);
        await scrollToElement(charter);
        await homeLeave(current, trigger);
      },
    },
    {
      name: "project-to-home",
      from: { namespace: ["project"] },
      to: { namespace: ["home"] },
      async leave({ current, next, trigger }) {
        let previousPage = current.url.path;
        // window.sessionStorage.setItem("previousPage", previousPage);
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
