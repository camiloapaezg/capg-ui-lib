import { style } from "@vanilla-extract/css";
import { iconContentClass } from "../styles.css";

export const lettersClass = style([
  iconContentClass,
  {
    strokeWidth: 1.15,
  },
]);
