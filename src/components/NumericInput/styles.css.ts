import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "column nowrap",
    gap: "0.375em",
    width: "100%",
    maxWidth: "20rem",
    vars: {
      "--num-input-stepper-width": "2rem",
    },
  },
]);

export const controlClass = style({
  display: "flex",
  flexGrow: 1,
  flexFlow: "row nowrap",
  position: "relative",
  isolation: "isolate",
});

export const inputClass = style([
  outlineOnFocusClass,
  {
    width: "100%",
    height: "2.5rem",
    paddingInline: "0.75rem calc(var(--num-input-stepper-width) + 0.5rem)",
    fontWeight: 500,
    fontVariantNumeric: "tabular-nums",
    backgroundColor: "transparent",
    border: `1px solid ${themeColors.brand.darker}`,
    borderRadius: "0.375rem",
    outline: "none",
    selectors: {
      "&[data-has-scrubber]": {
        paddingInlineStart: "2.5rem",
      },
    },
  },
]);

export const triggerGroupClass = style({
  position: "absolute",
  top: "1px",
  bottom: "1px",
  right: "1px",
  display: "flex",
  flexDirection: "column",
  width: "var(--num-input-stepper-width)",
  borderLeft: `1px solid ${themeColors.brand.lighter}`,
  borderRadius: "0 calc(0.375rem - 1px) calc(0.375rem - 1px) 0",
  overflow: "hidden",
  zIndex: 1,
});

export const triggerClass = style([
  disabledClass,
  outlineOnFocusClass,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    zIndex: 0,
    color: themeColors.brand.lighter,
    backgroundColor: themeColors.brand.primary,
    border: "none",
    userSelect: "none",
    cursor: "pointer",
    ":hover": {
      backgroundColor: themeColors.input.primary.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.primary.active,
    },
  },
]);

export const triggerUpClass = style([
  triggerClass,
  {
    borderBottom: `1px solid ${themeColors.brand.lighter}`,
  },
]);
