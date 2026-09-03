import { style } from "@vanilla-extract/css";
import { disabledClass } from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

export const rootClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "0.25rem",
    width: "100%",
    maxWidth: "24rem",
    selectors: {
      "&[data-inline]": {
        width: "auto",
      },
    },
  },
]);

export const errorTextClass = style({
  color: colors.semantic.error,
});
