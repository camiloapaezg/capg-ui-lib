import { style } from "@vanilla-extract/css";
import { outlineOnFocusClass } from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

const scrollbarClass = style({
  position: "relative",
  display: "flex",
  backgroundColor: colors.surface.light,
  borderRadius: "0.375rem",
  margin: "0.5rem",
  opacity: 0,
  transition: "opacity 150ms",
  pointerEvents: "none",
  selectors: {
    "&::before": {
      content: "''",
      position: "absolute",
    },
    "&[data-scrolling]": {
      transitionDuration: "0ms",
    },
    "&[data-scrolling],&[data-hover]": {
      opacity: 1,
      pointerEvents: "auto",
    },
  },
});

export const rootClass = style({
  width: "24rem",
  height: "8.5rem",
  maxWidth: "calc(100vw - 8rem)",
  vars: {
    "--scrollbar-thickness": "0.375rem",
  },
});

export const viewportClass = style([
  outlineOnFocusClass,
  {
    height: "100%",
    borderRadius: "0.5rem",
    outline: `1px solid ${colors.border.default}`,
    outlineOffset: "1px",
    overscrollBehavior: "contain",
    scrollbarWidth: "none",
    selectors: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
]);

export const contentClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "1rem",
  paddingBlock: "0.75rem",
  paddingInlineStart: "1rem",
  paddingInlineEnd: "1.5rem",
});

export const scrollbarVerticalClass = style([
  scrollbarClass,
  {
    width: "var(--scrollbar-thickness)",
    selectors: {
      "&::before": {
        width: "1.25rem",
        height: "100%",
        left: "50%",
        transform: "translateX(-50%)",
      },
      "&:not([data-overflow-y])": {
        display: "none",
      },
    },
  },
]);

export const scrollbarHorizontalClass = style([
  scrollbarClass,
  {
    height: "var(--scrollbar-thickness)",
    "::before": {
      height: "1.25rem",
      width: "100%",
      left: "0",
      right: "0",
      bottom: "-0.5rem",
    },
    selectors: {
      "&:not([data-overflow-x])": {
        display: "none",
      },
    },
  },
]);

export const thumbClass = style({
  width: "100%",
  borderRadius: "inherit",
  backgroundColor: colors.primary.default,
  selectors: {
    "&:hover": {
      backgroundColor: colors.primary.light,
    },
    "&[data-orientation='horizontal']": {
      width: "unset",
      height: "100%",
    },
  },
});

export const cornerClass = style({
  background: "transparent",
});
