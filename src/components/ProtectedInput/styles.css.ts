import { style } from "@vanilla-extract/css";
import {
  disabledClass,
  iconBaseClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { themeColors } from "../../styles/theme";
import { textInputClass } from "../TextInput/styles.css";

export const rootClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "column nowrap",
    gap: "0.375rem",
    width: "100%",
    maxWidth: "20rem",
    vars: {
      "--visibility-width": "2rem",
    },
  },
]);

export const controlClass = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const inputClass = style([
  textInputClass,
  {
    paddingInline: "0.75rem calc(var(--visibility-width) + 0.5rem)",
  },
]);

export const visibilityTriggerClass = style([
  outlineOnFocusClass,
  {
    position: "absolute",
    right: "0.25rem",
    top: "0.25rem",
    bottom: "0.25rem",
    width: "var(--visibility-width)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem",
    background: "transparent",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "color 0.15s ease",
    ":hover": {
      backgroundColor: themeColors.input.outline.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.outline.active,
    },
  },
]);

export const indicatorClass = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const iconClass = style([
  iconBaseClass,
  {
    color: themeColors.brand.primary,
  },
]);
