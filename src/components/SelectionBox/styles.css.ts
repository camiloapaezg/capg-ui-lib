import { style } from "@vanilla-extract/css";
import {
  disabledClass,
  iconBaseClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

export const rootClass = style([
  disabledClass,
  {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    columnGap: "0.5rem",
    position: "relative",
    cursor: "pointer",
    vars: {
      "--selection-box-size": "1.25rem",
    },
  },
]);

export const controlClass = style([
  outlineOnFocusClass,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${colors.border.strong}`,
    borderRadius: "0.325rem",
    width: "var(--selection-box-size)",
    height: "var(--selection-box-size)",
    background: "transparent",
    flexShrink: 0,
    selectors: {
      "&[data-state='checked'], &[data-state='indeterminate']": {
        backgroundColor: colors.primary.default,
        borderColor: colors.primary.default,
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
    color: colors.primary.lighter,
  },
]);
