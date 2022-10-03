import { throttle } from "./throttle";

const far1 = document.querySelectorAll(".parallax_far_1");
const far2 = document.querySelectorAll(".parallax_far_2");
const far3 = document.querySelectorAll(".parallax_far_3");
const close1 = document.querySelectorAll(".parallax_close_1");
const close2 = document.querySelectorAll(".parallax_close_2");
const close3 = document.querySelectorAll(".parallax_close_3");

const applyParallax = (bg, coefficient) => {
  try {
    const section = bg.parentElement;
    const sectionY = section.getBoundingClientRect().top;
    let offset = -sectionY / coefficient;
    if (bg.classList.contains("hills")) {
      if (window.innerWidth > 768) {
        offset = Math.min(offset, 0);
      } else {
        offset = Math.min(offset, 32);
      }
    }
    if (bg.classList.contains("mountain")) {
      if (window.innerWidth > 768) {
        offset = Math.min(offset, 67);
      } else {
        offset = Math.min(offset, 130);
      }
    }
    if (bg.classList.contains("stones")) {
      if (window.innerWidth > 768) {
        offset = Math.min(offset, -10);
      } else {
        offset = Math.min(offset, 4);
      }
    }
    bg.style.transform = `translateY(${offset}px)`;
  } catch (error) {
    // do nothing, catch for disappearing waterfall images
  }
};

const parallaxEffect = () => {
  if (window.innerWidth > 768) {
    // desktop
    far1?.forEach((bg) => applyParallax(bg, 12));
    far2?.forEach((bg) => applyParallax(bg, 8));
    far3?.forEach((bg) => applyParallax(bg, 4));
    close1?.forEach((bg) => applyParallax(bg, -12));
    close2?.forEach((bg) => applyParallax(bg, -8));
    close3?.forEach((bg) => applyParallax(bg, -4));
  } else {
    // mobile
    far1?.forEach((bg) => applyParallax(bg, 24));
    far2?.forEach((bg) => applyParallax(bg, 16));
    far3?.forEach((bg) => applyParallax(bg, 8));
    close1?.forEach((bg) => applyParallax(bg, -24));
    close2?.forEach((bg) => applyParallax(bg, -16));
    close3?.forEach((bg) => applyParallax(bg, -8));
  }
};

setTimeout(parallaxEffect, 1000);

const throttledParallaxEffect = throttle(parallaxEffect, 50);

window.addEventListener("scroll", throttledParallaxEffect);
