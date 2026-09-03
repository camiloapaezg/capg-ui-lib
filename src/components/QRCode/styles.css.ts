import { style } from "@vanilla-extract/css";
import { colors } from "../../styles/theme.css";

export const rootClass = style({
  vars: {
    "--qr-code-size": "150px",
    "--qr-code-overlay-size": "calc(var(--qr-code-size) / 4)",
    position: "relative",
    width: "fit-content",
    display: "flex",
    flexFlow: "column nowrap",
  },
});

export const frameClass = style({
  width: "var(--qr-code-size)",
  height: "var(--qr-code-size)",
  fill: colors.text.primary,
});

export const patternClass = style({
  fill: "inherit",
});

export const overlayClass = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--qr-code-overlay-size)",
  height: "var(--qr-code-overlay-size)",
  padding: "0.25rem",
  background: colors.surface.default,
  borderRadius: "0.25rem",
});

export const imageClass = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});
