import { style } from "@vanilla-extract/css";
import { themeColors } from "./theme";

export const outlineOnFocusClass = style({
  selectors: {
    "&:focus": {
      outline: `2px solid ${themeColors.brand.primary}`,
      outlineOffset: "-2px",
      boxShadow: `0 0 0 1px ${themeColors.brand.primary}`,
    },
  },
});

export const disabledElementClass = style({
  selectors: {
    "&[data-disabled],&:disabled": {
      opacity: 0.5,
      filter: "grayscale(100%)",
      pointerEvents: "none",
    },
  },
});
