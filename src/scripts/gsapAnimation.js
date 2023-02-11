import { Expo, gsap } from "gsap";

export default function initGSAP() {
  let showHobbyBtn = document.getElementById("hobby-btn");
  let showProfessionalBtn = document.getElementById("professional-btn");

  gsap.set("#hobby-projects", {
    x: "100vw",
    opacity: 0,
  });

  gsap.set("#professional-projects", {
    x: 0,
    opacity: 1,
  });

  showHobbyBtn.addEventListener("click", () => {
    if (!showHobbyBtn.classList.contains("activated")) {
      showHobbyBtn.classList.add("activated");
      showProfessionalBtn.classList.remove("activated");
      // Slide out Pro projects
      gsap.to("#professional-projects", {
        x: "-100vw",
        ease: "ease",
        opacity: 0,
        duration: 0.6,
      });
      // Slide in hobby projects
      gsap.to("#hobby-projects", {
        x: 0,
        ease: "ease",
        duration: 0.6,
      });
      gsap.to("#hobby-projects", {
        opacity: 1,
        duration: 1,
      });
    }
  });

  showProfessionalBtn.addEventListener("click", () => {
    if (!showProfessionalBtn.classList.contains("activated")) {
      showProfessionalBtn.classList.add("activated");
      showHobbyBtn.classList.remove("activated");
      // Slide out hobby projects
      gsap.to("#hobby-projects", {
        x: "100vw",
        ease: "ease",
        duration: 0.6,
        opacity: 0,
      });
      // Slide in Pro projects
      gsap.to("#professional-projects", {
        x: 0,
        ease: "ease",
      });
      gsap.to("#professional-projects", {
        opacity: 1,
        duration: 1,
      });
    }
  });
}
