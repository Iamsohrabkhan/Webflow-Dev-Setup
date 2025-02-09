import gsap from "gsap";

const projectLeave = (current, trigger) => {
  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: "expo.inOut" },
  });
  const imageWrapper = trigger.querySelector(".project-img-wrapper");
  const image = trigger.querySelector(".project-img-wrapper img");
  gsap.set(image, {
    scale: 0.75,
  });

  tl.to(image, {
    scale: 1,
  });
  tl.to(
    imageWrapper,
    {
      clipPath: "inset(0%)",
      delay: 0.09,
    },
    0
  );

  tl.to(
    ".open",
    {
      yPercent: 0,
    },
    "-=1"
  );
  tl.to(
    ".close",
    {
      yPercent: 100,
    },
    "<"
  );

  return tl;
};

export default projectLeave;
