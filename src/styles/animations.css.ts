import { keyframes } from "@vanilla-extract/css";

export const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-4px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const fadeOut = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(-4px)",
  },
});

export const scaleFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const scaleFadeOut = keyframes({
  from: {
    opacity: 1,
    transform: "scale(1)",
  },
  to: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});
