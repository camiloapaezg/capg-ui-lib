import { style } from "@vanilla-extract/css";
import {
  outlineOnFocusClass,
  disabledClass,
  dataInvalidClass,
} from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

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
    border: `1px solid ${themeColors.brand.darker}`,
    borderRadius: "0.375rem",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&::placeholder, &[data-placeholder-shown]": {
        color: themeColors.gray.g400,
      },
    },
  },
]);
