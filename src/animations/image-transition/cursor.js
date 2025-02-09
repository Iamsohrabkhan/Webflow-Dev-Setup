import gsap from "gsap";

const cursor = (namespace) => {
  //   gsap.set(".cursor", {
  //     opacity: 0,
  //     scale: 0,
  //   });

 if (namespace === "home") {
    gsap.to(".open", {
      yPercent: 0,
    });
    gsap.to(".close", {
      yPercent: 120,
    });
  } else {
    gsap.to(".open", {
      yPercent: -120,
    });
    gsap.to(".close", {
      yPercent: 0,
    });
  }
  const projectsWrapper = document.querySelector("._01-charter");
  window.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
    gsap.to(".cursor", {
      x: x + 10,
      y: y + 20,
    });

  });
  projectsWrapper.addEventListener("mouseenter", () => {
    gsap.killTweensOf(".cursor"); // Prevents instant disappearing
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.4,
    });
  });
  projectsWrapper.addEventListener("mouseleave", () => {
    
    gsap.killTweensOf(".cursor"); // Prevents instant disappearing
    gsap.to(".cursor", {
      scale: 0,
      duration: 0.4,
    });
  });
};

export default cursor;
