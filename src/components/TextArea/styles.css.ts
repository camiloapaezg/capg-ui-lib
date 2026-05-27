import { style } from "@vanilla-extract/css";
import { textInputClass } from "../TextInput/styles.css";

export const textAreaClass = style([
  textInputClass,
  {
    minHeight: "5em",
    resize: "vertical",
    scrollPaddingBottom: "0.75em",
  },
]);
