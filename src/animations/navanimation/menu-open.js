import gsap from "gsap/all";

const menuOpen = () => {
  const navMenu = document.querySelector(".nav-menus");
  const navImages = document.querySelectorAll(".nav-menus .nav-images");
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "steps(40)",
    },
  });
  tl.fromTo(
    ".background-overlay",
    {
      opacity: 0,
    },
    {
      opacity: 0.8,
      duration: 0.4,
    }
  );

  tl.fromTo(
    navMenu,
    {
      clipPath: "inset(0% 0% 100% 0%)",
      pointerEvents: "all",
    },
    {
      clipPath: "inset(0% 0% 0% 0%)",
    },
    0
  ).fromTo(
    navImages,
    {
      clipPath: "inset(0% 0% 100% 0%)",
    },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      delay: 0.05,
    },
    0
  );
};
export default menuOpen;
