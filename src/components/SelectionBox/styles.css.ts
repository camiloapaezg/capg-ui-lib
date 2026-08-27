import { style } from "@vanilla-extract/css";
import {
  disabledClass,
  iconBaseClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style([
  disabledClass,
  {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    columnGap: "0.5rem",
    position: "relative",
    cursor: "pointer",
  },
]);

export const controlClass = style([
  outlineOnFocusClass,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${themeColors.brand.darker}`,
    borderRadius: "0.325rem",
    width: "1.25rem",
    height: "1.25rem",
    background: "transparent",
    flexShrink: 0,
    selectors: {
      "&[data-state='checked'], &[data-state='indeterminate']": {
        backgroundColor: themeColors.brand.primary,
        borderColor: themeColors.brand.primary,
      },
    },
  },
]);

export const indicatorClass = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&[data-state='unchecked']": {
      display: "none",
    },
  },
});

export const labelClass = style({
  userSelect: "none",
});

export const iconClass = style([
  iconBaseClass,
  {
    color: themeColors.gray.g100,
  },
]);
