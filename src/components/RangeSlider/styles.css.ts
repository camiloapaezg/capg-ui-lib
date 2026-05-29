import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { themeColors, themeShadows } from "../../styles/theme";

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "0.5em",
  width: "100%",
  maxWidth: "24em",
  selectors: {
    "&[data-orientation='vertical']": {
      height: "24em",
      maxWidth: "max-content",
    },
  },
});

export const valueTextClass = style({
  fontWeight: 500,
});

export const headerHorizontalClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
});

export const headerVerticalClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  marginBottom: "0.25em",
});

export const labelClass = style([
  valueTextClass,
  { userSelect: "none", fontWeight: 600 },
]);

export const contentHorizontalClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "0.5em",
  flex: 1,
});

export const contentVerticalClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  gap: "0.5em",
  flex: 1,
});

export const controlClass = style([
  disabledClass,
  {
    position: "relative",
    height: "1.75em",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    selectors: {
      "&[data-orientation='vertical']": {
        flexFlow: "column nowrap",
        height: "100%",
        width: "1.75em",
      },
    },
  },
]);

export const trackClass = style({
  flex: 1,
  height: "0.325em",
  background: themeColors.gray.g400,
  borderRadius: "9999px",
  overflow: "hidden",
  selectors: {
    "&[data-orientation='vertical']": {
      height: "100%",
      width: "0.5em",
    },
  },
});

export const rangeClass = style({
  height: "100%",
  background: themeColors.brand.primary,
  borderRadius: "9999px",
  selectors: {
    "&[data-orientation='vertical']": {
      width: "100%",
    },
  },
});

export const thumbClass = style([
  outlineOnFocusClass,
  {
    width: "1.5em",
    height: "1.5em",
    background: "white",
    border: `2px solid ${themeColors.brand.primary}`,
    borderRadius: "9999px",
    boxShadow: themeShadows.xs,
    transition: "box-shadow 0.15s ease, transform 0.1s ease",
    cursor: "grab",
    ":active": {
      cursor: "grabbing",
    },
  },
]);

export const markerGroupClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  marginTop: "0.5em",
  selectors: {
    "&[data-orientation='vertical']": {
      flexFlow: "column nowrap",
      height: "100%",
      marginTop: 0,
      marginInlineStart: "0.5em",
    },
  },
});

export const markerClass = style({
  position: "relative",
  lineHeight: "1rem",
  color: themeColors.brand.primary,
  selectors: {
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "0.25em",
      height: "0.25em",
      background: themeColors.gray.g400,
      borderRadius: "9999px",
      transform: "translateX(-50%)",
    },
    "&[data-orientation='horizontal']::before": {
      top: "-0.625em",
      left: "50%",
    },
    "&[data-orientation='vertical']::before": {
      left: "-0.625em",
      top: "50%",
    },
    "&:is([data-state='under-value'], [data-state='at-value'])::before ": {
      background: themeColors.brand.primary,
    },
  },
});
