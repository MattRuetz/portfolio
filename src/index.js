import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initGSAP from "./scripts/gsapAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initGSAP();

// set default lightmode, and mode-change script
window.onload = function () {
  const body = document.querySelector("body");
  const theme_btn = document.getElementById("toggle-dark-mode");

  theme_btn.onclick = function () {
    body.classList.toggle("dark");
  };

  setTimeout(() => {
    body.classList.toggle("dark");
  }, "2000");
};

// Prevent user from horizontal scroll
// var scrollEventHandler = function()
// {
//   window.scroll(0, window.pageYOffset)
// }

// window.addEventListener("scroll", scrollEventHandler, false);
