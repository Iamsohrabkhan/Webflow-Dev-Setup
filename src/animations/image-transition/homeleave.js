import gsap from "gsap";

const homeLeave = (current, trigger) => {
  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: "expo.inOut" },
  });
  const image = trigger.querySelector(".feature-image");
  const imageWrapper = trigger.querySelector(".feature-image-wrapper");

  tl.to(imageWrapper, {
    clipPath: "inset(12.5%)",
  });
  tl.to(
    image,
    {
      scale: 0.75,
      delay: 0.09,
    },
    0
  );
  tl.to(".open", {
    yPercent: -100,
    duration: 0.6,
  });
  tl.to(
    ".close",
    {
      yPercent: 0,
      duration: 0.6,
    },
    "<"
  );

  return tl;
};

export default homeLeave;
