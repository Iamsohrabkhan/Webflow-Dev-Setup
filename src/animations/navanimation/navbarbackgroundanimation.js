import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let scrollTriggerInstance = null; // Store ScrollTrigger instance globally

const navBackgroundAnimation = (namespace) => {
  const navbar = document.querySelector(".navbar-home");
  const hero = document.querySelector(".home-hero");

  if (!navbar || !hero) return;

  const targets = [".hamburger", ".navbar-log h2", ".cta-01"];

  // Kill and remove previous ScrollTrigger instance
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill()); // Ensure all instances are removed
    scrollTriggerInstance = null;
  }

  // Create a new ScrollTrigger instance
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom 100vh",
    scrub: true,
    onUpdate({ progress }) {
      const invertValue = progress * 100;

      gsap.to(targets, {
        filter: `invert(${namespace === "home" ? invertValue : "100"}%)`,
        duration: 0.1,
        overwrite: "auto",
      });

      gsap.to(navbar, {
        backgroundColor:
          namespace === "home" ? `rgba(244, 243, 241, ${progress})` : "#f4f3f1",
        duration: 0.1,
        overwrite: "auto",
      });
    },
  });

  // Small delay to ensure ScrollTrigger resets properly
  setTimeout(() => ScrollTrigger.refresh(), 100);
};

export default navBackgroundAnimation;
