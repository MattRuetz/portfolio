export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 200,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 800,
      distance: "0px",
      origin: window.innerWidth > 768 ? "bottom" : "bottom",
    },
  },
  //   {
  //     element: ".toggle-container",
  //     animation: {
  //       delay: 1000,
  //       distance: "0px",
  //       origin: "top",
  //     },
  //   },
  {
    element: ".hero-subtitle",
    animation: {
      delay: 1300,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".hero-subsubtitle",
    animation: {
      delay: 1800,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 2500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".toggle-container",
    animation: {
      delay: 2000,
      distance: "0px",
      origin: "top",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];
