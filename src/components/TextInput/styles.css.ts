import { style } from "@vanilla-extract/css";
import { outlineOnFocusClass, disabledClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const textInputClass = style([
  outlineOnFocusClass,
  disabledClass,
  {
    alignSelf: "stretch",
    background: "transparent",
    minWidth: "0em",
    width: "100%",
    padding: "0.5em 0.75em",
    border: `1px solid ${themeColors.brand.darker}`,
    borderRadius: "4px",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&::placeholder, &[data-placeholder-shown]": {
        color: themeColors.gray.g400,
      },
      "&[data-invalid]": {
        borderColor: themeColors.semantic.error,
      },
    },
  },
]);
