import { style } from "@vanilla-extract/css";
import { disabledClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "0.25em",
    width: "100%",
    maxWidth: "24em",
    selectors: {
      "&[data-inline]": {
        width: "auto",
      },
    },
  },
]);

export const labelClass = style({
  fontWeight: 600,
  marginBottom: "0.25em",
});

export const errorTextClass = style({
  color: themeColors.semantic.error,
});
