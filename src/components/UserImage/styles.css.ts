import { style } from "@vanilla-extract/css";
import { themeColors } from "../../styles/theme";

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
  backgroundColor: themeColors.brand.primary,
});

export const imageClass = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

export const fallbackClass = style({
  color: themeColors.gray.g100,
  borderRadius: "inherit",
  lineHeight: 1,
  textTransform: "uppercase",
  fontWeight: 500,
});
