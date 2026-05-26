import { style } from "@vanilla-extract/css";
import { themeColors } from "./theme";

export const outlineOnFocusClass = style({
  selectors: {
    "&:focus": {
      outline: `2px solid ${themeColors.brand.primary}`,
      outlineOffset: "-2px",
    },
  },
});
