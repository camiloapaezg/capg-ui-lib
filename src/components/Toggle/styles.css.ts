import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { themeColors, themeShadows } from "../../styles/theme";

export const rootClass = style([
  disabledClass,
  {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  },
]);

export const controlClass = style([
  outlineOnFocusClass,
  {
    width: "2.5rem",
    height: "1.5rem",
    padding: "0.125rem",
    background: themeColors.gray.g400,
    borderRadius: "9999px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
    transition: "background-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&[data-state='checked']": {
        backgroundColor: themeColors.brand.primary,
      },
    },
  },
]);

export const thumbClass = style({
  width: "1.25rem",
  height: "1.25rem",
  background: themeColors.gray.g100,
  borderRadius: "9999px",
  boxShadow: themeShadows.sm,
  transition: "transform 0.15s ease",
  selectors: {
    "&[data-state='checked']": {
      transform: "translateX(1rem)",
    },
  },
});
