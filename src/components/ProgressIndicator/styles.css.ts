import { keyframes, style } from "@vanilla-extract/css";
import { themeColors } from "../../styles/theme";

const indeterminate = keyframes({
  from: {
    transform: "translateX(-100%)",
  },
  to: {
    transform: "translateX(200%)",
  },
});

const circleSpin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

//  * For --size: 4rem (64px), --thickness: 0.375rem (6px)
//  * radius = (64 - 6) / 2 = 29px
//  * circumference = 2 * π * 29 ≈ 182px
//  */
const circleRangeIndeterminate = keyframes({
  "0%": {
    strokeDasharray: "1px 181px",
    strokeDashoffset: 0,
  },
  "50%": {
    strokeDasharray: "91px 91px",
    strokeDashoffset: "-45px",
  },
  "100%": {
    strokeDasharray: "91px 91px",
    strokeDashoffset: "-182px",
  },
});

export const circleRootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  gap: "0.5rem",
});

export const circleContainerClass = style({
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});

export const circleClass = style({
  vars: {
    "--size": "4rem",
    "--thickness": "0.375rem",
  },
  selectors: {
    "&[data-state='indeterminate']": {
      animation: `${circleSpin} 2s linear infinite`,
    },
  },
});

export const circleTrackClass = style({
  stroke: themeColors.gray.g400,
});

export const circleRangeClass = style({
  stroke: themeColors.brand.primary,
  transition: "stroke-dasharray 0.6s ease-out, stroke 0.6s ease-out",
  selectors: {
    "&[data-state='indeterminate']": {
      animation: `${circleRangeIndeterminate} 1.5s ease-in-out infinite`,
    },
  },
});

export const circleTextClass = style({
  position: "absolute",
  fontSize: "calc(var(--size) * 0.25)",
  fontWeight: 500,
});

export const linearRootClass = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.25rem",
  rowGap: "0.5rem",
  width: "100%",
  maxWidth: "16rem",
});

export const linearTextClass = style({
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 500,
  textAlign: "right",
});

export const linearTrackClass = style({
  gridColumn: "1 / -1",
  height: "0.375rem",
  background: themeColors.gray.g400,
  borderRadius: "9999px",
  overflow: "hidden",
});

export const linearRangeClass = style({
  height: "100%",
  background: themeColors.brand.primary,
  borderRadius: "9999px",
  transition: "width 0.3s ease-out",
  selectors: {
    "&[data-orientation='vertical']": {
      width: "100%",
      transition: "height 0.3s ease-out",
    },
    "&[data-state='indeterminate']": {
      width: "50%",
      animation: `${indeterminate} 1s ease-in-out infinite`,
    },
  },
});
