import { style } from "@vanilla-extract/css";

const baseClass = style({
  color: "inherit",
});

export const iconWrapperClass = style([
  baseClass,
  {
    width: "1.25rem",
    height: "1.25rem",
    background: "transparent",
    flexShrink: 0,
    fill: "none",
  },
]);

export const iconContentClass = style([
  baseClass,
  {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
]);
