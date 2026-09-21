import { style } from "@vanilla-extract/css";
import { tokens } from "../../styles/theme.css";

const colors = {
  red: "#7A1F1F",
  orange: "#6B3A16",
  gold: "#66520F",
  green: "#245A32",
  teal: "#0E5A56",
  blue: "#174A7A",
  indigo: "#3B2A78",
  purple: "#5A2A70",
  magenta: "#7A2850",
  olive: "#3F4F20",
};

export const colorClasses = Object.values(colors).map((color) =>
  style({
    backgroundColor: color,
  }),
);

export const rootClass = style({
  position: "relative",
  verticalAlign: "top",
  flexShrink: 0,
  userSelect: "none",
  borderRadius: "0.325rem",
  width: "5rem",
  height: "5rem",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: tokens.shadows.sm,
});

export const circularClass = style({
  borderRadius: "50%",
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
  fontSize: "inherit",
});
