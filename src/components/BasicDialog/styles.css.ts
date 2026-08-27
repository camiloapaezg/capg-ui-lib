import { style } from "@vanilla-extract/css";
import {
  fadeIn,
  fadeOut,
  scaleFadeIn,
  scaleFadeOut,
} from "../../styles/animations.css";
import { themeColors, themeShadows } from "../../styles/theme";

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
  background: "transparent",
  /* Prevent overscroll bounce on iOS */
  overscrollBehaviorY: "none",
  /* Reserve space for scrollbar to prevent layout shift */
  scrollbarGutter: "stable both-edges",
});

export const contentClass = style({
  position: "relative",
  outline: 0,
  padding: "0em 1em 1.5rem 1.5rem",
  borderRadius: "0.375rem",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "35rem",
  maxWidth: "calc(100vw - 10rem)",
  maxHeight: "calc(100vh - 10rem)",
  backgroundColor: themeColors.gray.g100,
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
  backgroundColor: themeColors.gray.g100,
  top: 0,
  left: 0,
  right: 0,
  alignSelf: "stretch",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "1.5rem 0rem 0.5rem 0rem",
});

export const titleClass = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  lineHeight: "1.75rem",
  flexGrow: 1,
});

export const closeIconClass = style({
  fontSize: "0.875rem",
  fontWeight: 500,
});
