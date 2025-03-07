import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let scrollTriggerInstance = null; // Store ScrollTrigger instance globally

const navBackgroundAnimation = (namespace) => {
  const navbar = document.querySelector(".navbar-home");
  const hero = document.querySelector(".home-hero");

  if (!navbar) return;

  const targets = [".hamburger", ".navbar-log h2", ".navbar-home .cta-01"];
  const targetsWithoutHamburger = [".navbar-log h2", ".navbar-home .cta-01"];
  const hamburger=document.querySelector(".hamburger")

  // Kill and remove previous ScrollTrigger instance
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill()); // Ensure all instances are removed
    scrollTriggerInstance = null;
  }

  if (hero) {
    // Create a new ScrollTrigger instance
    console.log("not end state nav");
    
    scrollTriggerInstance = ScrollTrigger.create({
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
          backgroundColor:
            namespace === "home"
              ? `rgba(244, 243, 241, ${progress})`
              : "#f4f3f1",
          duration: 0.1,
          overwrite: "auto",
        });
      },
    });

    // Small delay to ensure ScrollTrigger resets properly
    setTimeout(() => ScrollTrigger.refresh(), 100);
  } else {
    // If hero is not defined, set navbar to the end state
    
    gsap.set(targets, { filter: `invert(100%)` });
    gsap.set(navbar, { backgroundColor: "var(--bs-cream)" });
    
    
  }
};

export default navBackgroundAnimation;
