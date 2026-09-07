import { style } from "@vanilla-extract/css";
import { tokens } from "../../styles/theme.css";

export const rootClass = style({
  position: "relative",
  verticalAlign: "top",
  flexShrink: 0,
  userSelect: "none",
  borderRadius: "9999px",
  width: "3rem",
  height: "3rem",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: tokens.primary.default,
});

export const imageClass = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

export const fallbackClass = style({
  color: tokens.primary.lighter,
  borderRadius: "inherit",
  lineHeight: 1,
  textTransform: "uppercase",
  fontWeight: 500,
});
