import { style } from "@vanilla-extract/css";
import { themeColors } from "./theme";

export const outlineOnFocusClass = style({
  selectors: {
    "&:focus,&:focus-visible ": {
      outline: `2px solid ${themeColors.brand.primary}`,
      outlineOffset: "-2px",
    },
  },
});

export const disabledClass = style({
  selectors: {
    "&[data-disabled],&:disabled": {
      opacity: 0.5,
      filter: "grayscale(100%)",
      pointerEvents: "none",
    },
  },
});

export const dataInvalidClass = style({
  selectors: {
    "&[data-invalid]": {
      borderColor: themeColors.semantic.error,
    },
    "&[data-invalid]:focus": {
      borderColor: themeColors.semantic.error,
      boxShadow: `0 0 0 1px ${themeColors.semantic.error}`,
    },
  },
});

export const iconBaseClass = style({
  fontSize: "1rem",
  fontWeight: 500,
  background: "transparent",
  color: "inherit",
  flexShrink: 0,
});
