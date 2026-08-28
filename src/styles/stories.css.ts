import { globalStyle } from "@vanilla-extract/css";
import { themeColors } from "./theme";

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: "none",
  outline: "none",
  fontWeight: 400,
  lineHeight: 1.5,
  color: themeColors.gray.g700,
  background: "transparent",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "14px",
  boxSizing: "border-box",
});
