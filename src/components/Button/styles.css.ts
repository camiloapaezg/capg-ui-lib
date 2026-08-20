import { style } from "@vanilla-extract/css";
import { outlineOnFocusClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const baseClass = style({
  fontWeight: 500,
  minWidth: "2em",
  padding: "0.5em 1em",
  width: "fit-content",
  borderRadius: "0.375rem",
  cursor: "pointer",
  display: "inline-flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "0.5em",
});

export const primaryClass = style([
  baseClass,
  {
    color: themeColors.brand.lighter,
    border: "1px solid",
    ":enabled": {
      backgroundColor: themeColors.brand.primary,
      borderColor: themeColors.brand.primary,
    },
    ":hover": {
      backgroundColor: themeColors.input.primary.hover,
      borderColor: themeColors.input.primary.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.primary.active,
      borderColor: themeColors.input.primary.active,
    },
    ":disabled": {
      backgroundColor: themeColors.gray.g400,
      borderColor: themeColors.gray.g400,
      pointerEvents: "none",
    },
  },
]);

export const secondaryClass = style([
  baseClass,
  {
    color: themeColors.brand.lighter,
    border: "1px solid",
    ":enabled": {
      backgroundColor: themeColors.brand.light,
      borderColor: themeColors.brand.light,
    },
    ":hover": {
      backgroundColor: themeColors.input.secondary.hover,
      borderColor: themeColors.input.secondary.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.secondary.active,
      borderColor: themeColors.input.secondary.active,
    },
    ":disabled": {
      backgroundColor: themeColors.gray.g400,
      borderColor: themeColors.gray.g400,
      pointerEvents: "none",
    },
  },
]);

export const outlineClass = style([
  baseClass,
  {
    border: "1px solid",
    ":enabled": {
      color: themeColors.brand.primary,
      background: "transparent",
      borderColor: themeColors.brand.primary,
    },
    ":hover": {
      backgroundColor: themeColors.input.outline.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.outline.active,
    },
    ":disabled": {
      color: themeColors.gray.g400,
      background: "transparent",
      borderColor: themeColors.input.outline.disabled,
      pointerEvents: "none",
    },
  },
]);

export const ghostClass = style([
  baseClass,
  outlineOnFocusClass,
  {
    border: "none",
    ":enabled": {
      background: "transparent",
    },
    ":hover": {
      backgroundColor: themeColors.input.ghost.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.ghost.active,
    },
    ":disabled": {
      color: themeColors.gray.g400,
      pointerEvents: "none",
      background: "transparent",
    },
  },
]);

export const iconClass = style({
  padding: 0,
  width: "2em",
  height: "2em",
});
