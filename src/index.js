import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initGSAP from "./scripts/gsapAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

let numProfessional = 6;
let numHobby = 1;
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initGSAP(numProfessional, numHobby);

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
