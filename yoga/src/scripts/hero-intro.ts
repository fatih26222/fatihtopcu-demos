import { gsap } from "gsap";

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const selectors = {
  announcement: "[data-intro-announcement]",
  navigation: "[data-intro-navigation]",
  background: "[data-intro-background]",
  eyebrow: "[data-intro-eyebrow]",
  titleFirst: "[data-intro-title-first]",
  titleSecond: "[data-intro-title-second]",
  description: "[data-intro-description]",
  actions: "[data-intro-actions]",
  proofItems: "[data-intro-proof]",
  scroll: "[data-intro-scroll]",
};

const elements = document.querySelectorAll(
  Object.values(selectors).join(",")
);

if (reduceMotion) {
  gsap.set(elements, {
    clearProps: "all",
  });
} else {
  const isMobile = window.matchMedia("(max-width: 760px)").matches;

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  gsap.set(selectors.background, {
    scale: isMobile ? 1.025 : 1.055,
    transformOrigin: "center center",
  });

  timeline
    .from(selectors.announcement, {
      opacity: 0,
      y: -18,
      duration: 0.55,
    })
    .from(
      selectors.navigation,
      {
        opacity: 0,
        y: -22,
        duration: 0.7,
      },
      "-=0.3"
    )
    .from(
      selectors.eyebrow,
      {
        opacity: 0,
        y: 20,
        duration: 0.55,
      },
      "-=0.24"
    )
    .from(
      selectors.titleFirst,
      {
        opacity: 0,
        y: isMobile ? 34 : 52,
        duration: isMobile ? 0.75 : 0.95,
      },
      "-=0.24"
    )
    .from(
      selectors.titleSecond,
      {
        opacity: 0,
        y: isMobile ? 30 : 46,
        duration: isMobile ? 0.75 : 0.95,
      },
      "-=0.62"
    )
    .from(
      selectors.description,
      {
        opacity: 0,
        y: 24,
        duration: 0.65,
      },
      "-=0.5"
    )
    .from(
      selectors.actions,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.42"
    )
    .from(
      selectors.proofItems,
      {
        opacity: 0,
        y: 18,
        stagger: 0.1,
        duration: 0.55,
      },
      "-=0.32"
    )
    .from(
      selectors.scroll,
      {
        opacity: 0,
        y: -8,
        duration: 0.5,
      },
      "-=0.2"
    )
    .to(
      selectors.background,
      {
        scale: 1,
        duration: isMobile ? 1.5 : 2.1,
        ease: "power2.out",
      },
      0.15
    );
}
