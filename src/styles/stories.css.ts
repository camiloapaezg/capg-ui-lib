import { globalStyle } from "@vanilla-extract/css";
import { tokens } from "./theme.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: "none",
  outline: "none",
  fontWeight: 400,
  lineHeight: 1.5,
  color: tokens.text.primary,
  background: "transparent",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "14px",
  boxSizing: "border-box",
});

globalStyle(".docs-story", {
  backgroundColor: tokens.surface.default,
});
