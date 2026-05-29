import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style([
  disabledClass,
  {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    columnGap: "0.5em",
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
    borderRadius: "0.25em",
    width: "1.1em",
    height: "1.1em",
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

export const iconClass = style({
  fontSize: "14px",
  color: themeColors.brand.lighter,
});
