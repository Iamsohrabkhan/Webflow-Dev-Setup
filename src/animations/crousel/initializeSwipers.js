
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

function initializeSwipers() {
  document.querySelectorAll(".swiper-pagination").forEach((pagination) => {
    pagination.style.position = "absolute";
    pagination.style.top = "50%";
    pagination.style.left = "50%";
    pagination.style.transform = "translate(-50%,-50%)";
    pagination.style.zIndex = "10"; 
  });

  document.querySelectorAll(".swiper-container").forEach((container) => {
    const swiperInstance = new Swiper(container.querySelector(".purchase-swiper"), {
      loop: true,
      
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: container.querySelector(".custom-swiper-button-next"),
        prevEl: container.querySelector(".custom-swiper-button-prev"),
            
      },
      pagination: {
        el: container.querySelector(".swiper-pagination"),
        clickable: false,        
      },
    });

    const nextMobileBtn = container.querySelector(".swiper-next-button-mobile");
    const prevMobileBtn = container.querySelector(".swiper-prev-button-mobile");

    if (nextMobileBtn) {
      nextMobileBtn.addEventListener("click", () => {
        swiperInstance.slideNext();
      });
    }

    if (prevMobileBtn) {
      prevMobileBtn.addEventListener("click", () => {
        swiperInstance.slidePrev();
      });
    }
  });
}

export default initializeSwipers;
