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
