import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./theme.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: "none",
  outline: "none",
  fontWeight: 400,
  lineHeight: 1.5,
  color: colors.text.primary,
  background: "transparent",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "14px",
  boxSizing: "border-box",
});

globalStyle(".docs-story", {
  backgroundColor: colors.surface.default,
});
