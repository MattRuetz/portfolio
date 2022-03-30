import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// set default lightmode, and mode-change script
window.onload = function () {
  const body = document.querySelector("body");
  const theme_btn = document.getElementById("toggle-dark-mode");

  theme_btn.onclick = function () {
    body.classList.toggle("dark");
  };
};
