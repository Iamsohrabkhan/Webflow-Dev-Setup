import gsap from "gsap";

const imageshover = () => {
  let zIndexCounter = 1;
  const navImages = document.querySelectorAll(".nav-images .nav-img");
  const navItems = document.querySelectorAll(".nav-links .nav-link");

  navItems.forEach((curr, i) => {
    curr.addEventListener("mouseenter", () => {
      zIndexCounter++;
      navImages[i].style.zIndex = zIndexCounter;
      gsap.fromTo(
        navImages[i],
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "expo.out",
        }
      );
      gsap.fromTo(
        navImages[i],
        {
          scale: 1.5,
        },
        {
          scale: 1,
          duration: 2.5,
          ease: "power4.out",
        }
      );
    });
  });
};

export default imageshover;
