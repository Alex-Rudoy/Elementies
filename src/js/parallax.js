import { throttle } from "./throttle";

const far1 = document.querySelectorAll(".parallax_far_1");
const far2 = document.querySelectorAll(".parallax_far_2");
const far3 = document.querySelectorAll(".parallax_far_3");
const close1 = document.querySelectorAll(".parallax_close_1");
const close2 = document.querySelectorAll(".parallax_close_2");
const close3 = document.querySelectorAll(".parallax_close_3");

const applyParallax = (bg, coefficient) => {
  const section = bg.parentElement;
  const sectionY = section.getBoundingClientRect().top;
  let offset = -sectionY / coefficient;
  if (bg.classList.contains("hills")) {
    offset = Math.min(offset, 0);
  }
  if (bg.classList.contains("mountain")) {
    offset = Math.min(offset, 67);
  }
  if (bg.classList.contains("stones")) {
    offset = Math.min(offset, -10);
  }
  bg.style.transform = `translateY(${offset}px)`;
};

const parallaxEffect = () => {
  far1?.forEach((bg) => applyParallax(bg, 12));
  far2?.forEach((bg) => applyParallax(bg, 8));
  far3?.forEach((bg) => applyParallax(bg, 4));
  close1?.forEach((bg) => applyParallax(bg, -12));
  close2?.forEach((bg) => applyParallax(bg, -8));
  close3?.forEach((bg) => applyParallax(bg, -4));
};

setTimeout(parallaxEffect, 100);

const throttledParallaxEffect = throttle(parallaxEffect, 100);

window.addEventListener("scroll", throttledParallaxEffect);
