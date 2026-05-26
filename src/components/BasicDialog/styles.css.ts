import { style } from "@vanilla-extract/css";
import {
  fadeIn,
  fadeOut,
  scaleFadeIn,
  scaleFadeOut,
} from "../../styles/animations.css";
import { themeShadows } from "../../styles/theme";

export const rootClass = style({
  position: "relative",
});

export const backdropClass = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: "calc(50 + var(--layer-index, 0))",
  selectors: {
    "&[data-state='open']": {
      animation: `${fadeIn} 0.2s ease-out`,
    },
    "&[data-state='closed']": {
      animation: `${fadeOut} 0.15s ease-in forwards`,
    },
  },
});

export const positionerClass = style({
  position: "fixed",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  inset: 0,
  zIndex: "calc(50 + var(--layer-index, 0))",
  /* Prevent overscroll bounce on iOS */
  overscrollBehaviorY: "none",
  /* Reserve space for scrollbar to prevent layout shift */
  scrollbarGutter: "stable both-edges",
});

export const contentClass = style({
  position: "relative",
  outline: 0,
  padding: "0em 1em 1.5em 1.5em",
  borderRadius: "4px",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "26em",
  maxWidth: "calc(100vw - 10em)",
  maxHeight: "calc(100vh - 10em)",
  backgroundColor: "white",
  boxShadow: themeShadows.xl,
  zIndex: "calc(50 + var(--layer-index, 0))",
  transition: "transform 0.1s ease-in-out",
  selectors: {
    "&[data-state='open']": {
      animation: `${scaleFadeIn} 0.15s ease-out`,
    },
    "&[data-state='closed']": {
      animation: `${scaleFadeOut} 0.15s ease-in`,
    },
    "&[data-has-nested]": {
      transform: "scale(calc(1 - var(--nested-layer-count) * 0.05))",
    },
  },
});

export const headerClass = style({
  position: "sticky",
  backgroundColor: "white",
  top: 0,
  left: 0,
  right: 0,
  alignSelf: "stretch",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "1.5em 0em 0.5em 0em",
});

export const titleClass = style({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.75em",
  flexGrow: 1,
});

export const iconClass = style({
  fontSize: "14px",
  fontWeight: "500",
  background: "transparent",
});
