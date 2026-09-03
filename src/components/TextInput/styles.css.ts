import { style } from "@vanilla-extract/css";
import {
  dataInvalidClass,
  disabledClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

export const textInputClass = style([
  outlineOnFocusClass,
  dataInvalidClass,
  disabledClass,
  {
    alignSelf: "stretch",
    background: "transparent",
    minWidth: "0rem",
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: `1px solid ${colors.border.strong}`,
    borderRadius: "0.375rem",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&::placeholder, &[data-placeholder-shown]": {
        color: colors.text.secondary,
      },
    },
  },
]);
