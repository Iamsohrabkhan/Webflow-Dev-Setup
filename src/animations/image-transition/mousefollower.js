import gsap from "gsap";

const mouseFollower = () => {
  const cursor = document.querySelector(".cursor-follow-text");
  const charter = document.querySelector("._01-charter");

  if (!cursor) {
    console.error("Cursor element not found!");
    return;
  }

  gsap.set(cursor, {
    scale: 0,
    opacity: 0,
  });

  // Check if charter element exists before adding event listeners
  if (charter) {
    charter.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    charter.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0, // Fixed opacity issue
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }

  let mouseX = 0,
    mouseY = 0;
  let posX = 0,
    posY = 0;
  const smoothness = 0.3; // Adjust this for smoothness (lower is smoother)

  const lerp = (start, end, t) => start + (end - start) * t;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    posX = lerp(posX, mouseX, smoothness);
    posY = lerp(posY, mouseY, smoothness);

    if (cursor) {
      // cursor.style.transform = `translate(${posX}px, ${posY}px)`;
      gsap.to(cursor, {
        x: posX + 10,
        y: posY + 10,
      });
    }

    requestAnimationFrame(animate);
  };

  animate();
};

export default mouseFollower;
