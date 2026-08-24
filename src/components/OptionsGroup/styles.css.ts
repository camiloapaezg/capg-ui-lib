import { style } from "@vanilla-extract/css";
import {
  disabledClass,
  labelBaseClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style([
  disabledClass,
  {
    display: "flex",
    gap: "0.5rem",
    flexFlow: "column nowrap",
    vars: {
      "--options-group-size": "1.25rem",
    },
  },
]);

export const labelClass = style([labelBaseClass, disabledClass]);

export const itemClass = style([
  disabledClass,
  {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
  },
]);

export const itemControlClass = style([
  outlineOnFocusClass,
  disabledClass,
  {
    width: "var(--options-group-size)",
    height: "var(--options-group-size)",
    border: `1px solid ${themeColors.brand.primary}`,
    borderRadius: "9999px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    selectors: {
      "&[data-state='checked']": {
        background: themeColors.brand.primary,
        boxShadow: `inset 0px 0px 0px 2px ${themeColors.brand.lighter}`,
      },
    },
  },
]);

export const itemTextClass = style({
  userSelect: "none",
});
