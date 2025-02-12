import gsap from "gsap/all";

const menuClose = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      // ease: "cubic-bezier(.24,.43,.15,.97)",
      ease: "steps(40)",
    },
  });

  const navMenu = document.querySelector(".nav-menus");
  const cross = document.querySelector(".cross-icon");
  const navImages = document.querySelectorAll(".nav-menus .nav-images");

  cross.addEventListener("click", () => {
    
    tl.fromTo(
      ".background-overlay",
      {
        opacity: 0.8,
      },
      {
        opacity: 0,
        duration: 0.4,
      }
    );
    tl.fromTo(
      navImages,
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      0
    ).fromTo(
      navMenu,
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 100% 0%)",
        delay: 0.05,
        onComplete() {
          console.log("no pointer");
          navMenu.style.pointerEvents = "none";
        },
      },
      0
    );
  });
};
export default menuClose;
