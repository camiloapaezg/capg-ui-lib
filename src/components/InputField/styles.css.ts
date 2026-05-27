import { style } from "@vanilla-extract/css";
import { disabledElementClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const lineHeightClass = style({
  lineHeight: "1.25em",
});

export const rootClass = style([
  disabledElementClass,
  {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "0.5em",
    width: "100%",
    maxWidth: "24em",
    selectors: {
      "&[data-inline]": {
        width: "auto",
      },
    },
  },
]);

export const labelClass = style([
  lineHeightClass,
  {
    fontWeight: 600,
  },
]);

export const errorTextClass = style([
  lineHeightClass,
  {
    color: themeColors.semantic.error,
  },
]);
