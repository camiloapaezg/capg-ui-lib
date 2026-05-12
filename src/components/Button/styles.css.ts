import { style } from "@vanilla-extract/css";
import { themeColors } from "../../styles/themeColors";

export const baseClass = style({
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "14px",
  fontWeight: 500,

  padding: "0.75em 1.25em",
  minWidth: "8em",
  width: "fit-content",
  borderRadius: "4px",
  cursor: "pointer",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "stretch",
  alignItems: "center",
  columnGap: "0.5em",
});

export const primaryClass = style([
  baseClass,
  {
    ":enabled": {
      color: themeColors.brand.lighter,
      backgroundColor: themeColors.brand.primary,
      border: "none",
    },
    ":hover": {
      backgroundColor: themeColors.input.primary.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.primary.active,
    },
    ":disabled": {
      backgroundColor: themeColors.input.disabled,
    },
  },
]);

export const secondaryClass = style([
  baseClass,
  {
    ":enabled": {
      color: themeColors.brand.lighter,
      backgroundColor: themeColors.brand.light,
      border: "none",
    },
    ":hover": {
      backgroundColor: themeColors.input.secondary.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.secondary.active,
    },
    ":disabled": {
      backgroundColor: themeColors.input.disabled,
    },
  },
]);

export const outlineClass = style([
  baseClass,
  {
    ":enabled": {
      color: themeColors.brand.primary,
      background: "transparent",
      border: `${themeColors.brand.primary} solid 1px`,
    },
    ":hover": {
      backgroundColor: themeColors.input.outline.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.outline.active,
    },
    ":disabled": {
      color: themeColors.input.disabled,
    },
  },
]);

export const ghostClass = style([
  baseClass,
  {
    ":enabled": {
      color: themeColors.brand.darker,
      background: "transparent",
      border: "none",
    },
    ":hover": {
      backgroundColor: themeColors.input.ghost.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.ghost.active,
    },
    ":disabled": {
      color: themeColors.input.disabled,
    },
  },
]);
