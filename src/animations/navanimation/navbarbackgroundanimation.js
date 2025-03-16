import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animate, scroll, transform } from "motion";

gsap.registerPlugin(ScrollTrigger);

let scrollTriggerInstance = null; // Store ScrollTrigger instance globally

const navBackgroundAnimation = (namespace) => {
  const navbar = document.querySelector(".navbar-home");
  const hero = document.querySelector(".home-hero");

  if (!navbar) return;

  const targets = [".hamburger", ".navbar-log h2", ".navbar-home .cta-01"];
  const targetsWithoutHamburger = [".navbar-log h2", ".navbar-home .cta-01"];
  const hamburger = document.querySelector(".hamburger");
  let duration = 0.0001;
  const transformer = transform([0, 1], ["transparent", "black"]);
  if (namespace === "home") {
    const scrollHeroProgress = scroll(
      (progress) => {
        animate(".navbar-home", {
          backgroundColor: transformer(progress),
        });
      },
      {
        target: document.querySelector(".hero"),
        offset: ["start start", "end start"],
      }
    );
  } else if (namespace === "project") {
    animate(
      ".navbar-home",
      {
        backgroundColor: "var(--bs-cream)",
      },
      { duration }
    );
    animate(
      ".navbar-log h2",
      {
        filter: "invert(100%)",
      },
      { duration }
    );
    animate(
      ".hamburger",
      {
        filter: "invert(100%)",
      },
      { duration }
    );
    animate(
      ".navbar-home .cta-01",
      {
        filter: "invert(100%)",
      },
      { duration }
    );
  }
};

export default navBackgroundAnimation;

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// let scrollTriggerInstance = null; // Store ScrollTrigger instance globally

// const navBackgroundAnimation = (namespace) => {
//   const navbar = document.querySelector(".navbar-home");
//   const hero = document.querySelector(".home-hero");

//   if (!navbar) return;

//   const targets = [".hamburger", ".navbar-log h2", ".navbar-home .cta-01"];
//   const targetsWithoutHamburger = [".navbar-log h2", ".navbar-home .cta-01"];
//   const hamburger = document.querySelector(".hamburger");

//   // Kill and remove previous ScrollTrigger instance
//   if (scrollTriggerInstance) {
//     scrollTriggerInstance.kill();
//     ScrollTrigger.getAll().forEach((st) => st.kill()); // Ensure all instances are removed
//     scrollTriggerInstance = null;
//   }

//   if (hero) {
//     // Create a new ScrollTrigger instance
//     console.log("not end state nav");

//     scrollTriggerInstance = ScrollTrigger.create({
//       trigger: hero,
//       start: "top top",
//       end: "bottom 100vh",
//       scrub: true,
//       onUpdate({ progress }) {
//         const invertValue = progress * 100;

//         gsap.to(targets, {
//           filter: `invert(${invertValue}%)`,
//           duration: 0.1,
//           overwrite: "auto",
//         });

//         gsap.to(navbar, {
//           backgroundColor: `rgba(244, 243, 241, ${progress})`,
//           duration: 0.1,
//           overwrite: "auto",
//         });
//       },
//     });

//     // Small delay to ensure ScrollTrigger resets properly
//     setTimeout(() => ScrollTrigger.refresh(), 100);
//   } else {
//     // If hero is not defined, set navbar to the end state

//     gsap.set(targets, { filter: `invert(100%)` });
//     gsap.set(navbar, { backgroundColor: "var(--bs-cream)" });
//   }
// };

// export default navBackgroundAnimation;
