import { style } from "@vanilla-extract/css";
import { themeColors } from "../../styles/theme";

export const rootClass = style({
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  columnGap: "0.5em",
  position: "relative",
  cursor: "pointer",
  selectors: {
    "&[data-disabled]": {
      opacity: 0.5,
      filter: "grayscale(100%)",
    },
  },
});

export const controlClass = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${themeColors.brand.darker}`,
  borderRadius: "0.25em",
  width: "1.1em",
  height: "1.1em",
  background: "transparent",
  color: themeColors.brand.lighter,
  flexShrink: 0,
  selectors: {
    "&[data-state='checked'], &[data-state='indeterminate']": {
      backgroundColor: themeColors.brand.primary,
      borderColor: themeColors.brand.primary,
    },
    "&[data-focus-visible], &:focus": {
      outline: `2px solid ${themeColors.brand.primary}`,
      outlineOffset: "-2px",
    },
  },
});

export const indicatorClass = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const labelClass = style({
  userSelect: "none",
});
