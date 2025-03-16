import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navBackgroundAnimationMobile = () => {
  const navbar = document.querySelector(".navbar-home");
  const hero = document.querySelector(".home-hero");

  // Ensure both navbar and hero are defined
  if (!navbar) return;

  const targets = [".hamburger", ".navbar-log h2", ".navbar-home .cta-01"];

  const pathname = window.location.pathname;

  console.log(pathname);
  
  if (pathname.includes("charter") || pathname.includes("purchase")) {
    gsap.set(targets, { filter: `invert(100%)` });
    gsap.set(navbar, { backgroundColor: "var(--bs-cream)" });
    return; // Stop execution here
  }

  // Create a new ScrollTrigger instance
  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom 100vh",
    scrub: true,
    onUpdate({ progress }) {
      const invertValue = progress * 100;
      gsap.to(targets, {
        filter: `invert(${invertValue}%)`,
        duration: 0.1,
        overwrite: "auto",
      });
      gsap.to(navbar, {
        backgroundColor: `rgba(244, 243, 241, ${progress})`,
        duration: 0.1,
        overwrite: "auto",
      });
    },
  });
};

export default navBackgroundAnimationMobile;
