import { Expo, gsap } from "gsap";

export default function initGSAP() {
  let showHobbyBtn = document.getElementById("hobby-btn");
  let showProfessionalBtn = document.getElementById("professional-btn");

  gsap.set("#design-info", {
    opacity: 0,
  });

  gsap.to("#design-info", {
    opacity: 0,
    ease: "ease",
    duration: 0.3,
  });

  showHobbyBtn.addEventListener("click", () => {
    if (!showHobbyBtn.classList.contains("activated")) {
      showHobbyBtn.classList.add("activated");
      showProfessionalBtn.classList.remove("activated");
    }
  });

  showProfessionalBtn.addEventListener("click", () => {
    if (!showProfessionalBtn.classList.contains("activated")) {
      showProfessionalBtn.classList.add("activated");
      showHobbyBtn.classList.remove("activated");
    }
  });
}
