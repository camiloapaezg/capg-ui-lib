import { style } from "@vanilla-extract/css";
import { fadeIn, fadeOut } from "../../styles/animations.css";
import { themeColors, themeShadows } from "../../styles/theme";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";

const borderRadius = "4px";

const viewTriggerClass = style({
  cursor: "pointer",
  color: themeColors.brand.lighter,
  fontWeight: 600,
  outline: "none",
  border: "none",
  ":enabled": {
    background: "transparent",
  },
  ":hover": {
    backgroundColor: themeColors.input.primary.hover,
  },
  ":active": {
    backgroundColor: themeColors.input.primary.active,
  },
  ":disabled": {
    backgroundColor: themeColors.gray.g400,
    pointerEvents: "none",
  },
});

const chevronClass = style([
  viewTriggerClass,
  {
    width: "2em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
]);

const buttonClass = style([
  disabledClass,
  {
    borderRadius: "0.375rem",
    border: "none",
    outline: "none",
    cursor: "pointer",
    background: "transparent",
    ":hover": {
      borderColor: themeColors.brand.darker,
      backgroundColor: themeColors.input.ghost.hover,
    },
    ":active": {
      borderColor: themeColors.brand.darker,
      backgroundColor: themeColors.input.ghost.active,
    },
  },
]);

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  width: "100%",
  maxWidth: "26em",
  position: "relative",
  boxSizing: "border-box",
  rowGap: "0.5em",
  color: "inherit",
});

export const labelClass = style({
  userSelect: "none",
  fontWeight: 600,
});

export const controlClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  columnGap: "0.5em",
  minHeight: "2.5em",
  height: "fit-content",
  width: "100%",
});

export const multipleInputClass = style({
  alignSelf: "stretch",
  minWidth: "8em",
  padding: "0.25em 0.5em",
  border: `1px solid ${themeColors.brand.darker}`,
  borderRadius: "0.375rem",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "0.25em",
  flexGrow: 1,
});

export const triggerClass = style([
  {
    border: `1px solid ${themeColors.gray.g700}`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.5em",
    height: "2.5em",
    flexShrink: 0,
    transition: "background 0.15s ease, border-color 0.15s ease",
  },
  buttonClass,
]);

export const clearTriggerClass = style([
  {
    border: `1px solid ${themeColors.gray.g700}`,
    padding: "0.5em 1em",
    height: "2.5em",
  },
  buttonClass,
]);

export const contentClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  rowGap: "0.5em",
  minWidth: "18em",
  background: themeColors.brand.primary,
  borderRadius: borderRadius,
  outline: "none",
  border: `1px solid ${themeColors.brand.primary}`,
  zIndex: "calc(50 + var(--layer-index, 0))",
  boxShadow: themeShadows.md,
  selectors: {
    "&[data-state='open']": {
      animation: `${fadeIn} 0.2s ease-out`,
    },
    "&[data-state='closed']": {
      animation: `${fadeOut} 0.15s ease-in forwards`,
    },
  },
});

export const viewClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  background: "transparent",
  selectors: {
    "&[hidden]": {
      display: "none",
    },
  },
});

export const viewControlClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "stretch",
  alignItems: "stretch",
  height: "3em",
  background: "inherit",
});

export const chevronLeftClass = style([
  chevronClass,
  {
    borderRadius: `${borderRadius} 0px 0px 0px`,
  },
]);

export const chevronRightClass = style([
  chevronClass,
  {
    borderRadius: `0px ${borderRadius} 0px 0px`,
  },
]);

export const rangeTextTriggerClass = style([
  viewTriggerClass,
  {
    flexGrow: 1,
  },
]);

export const rangeTextClass = style({
  color: "inherit",
});

export const iconClass = style({
  fontSize: "18px",
  color: "inherit",
  fontWeight: "inherit",
});

export const tableClass = style({
  background: "white",
  padding: "0.5em",
  borderRadius: `0px 0px ${borderRadius} ${borderRadius} `,
  borderCollapse: "separate",
  borderSpacing: "0em",
});

export const tableHeaderClass = style({
  color: themeColors.gray.g600,
  fontWeight: 500,
  textAlign: "center",
  textTransform: "uppercase",
});

export const tableRowClass = style({
  height: "2.5em",
});

export const tableCellClass = style({
  textAlign: "center",
});

export const tableCellTriggerClass = style([
  buttonClass,
  outlineOnFocusClass,
  disabledClass,
  {
    height: "2.5em",
    width: "3em",
    marginBottom: "0.25em",
    display: "inline-flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    outline: "none",
    userSelect: "none",
    ":enabled": {
      borderRadius: "0.375rem",
      background: "transparent",
      color: themeColors.brand.darker,
      cursor: "pointer",
    },
    selectors: {
      "&[data-today]": {
        fontWeight: 600,
        color: themeColors.brand.primary,
      },
      "&[data-in-range]": {
        backgroundColor: themeColors.input.outline.hover,
        color: themeColors.brand.primary,
        borderRadius: 0,
      },
      "&[data-selected],&[data-range-start],&[data-range-end]": {
        backgroundColor: themeColors.brand.primary,
        color: themeColors.brand.lighter,
        fontWeight: 500,
      },
      "&[data-range-start]": {
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
      },
      "&[data-range-end]": {
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
      },
      "&[data-outside-range]": {
        opacity: 0.5,
      },
      "&[data-unavailable]": {
        color: themeColors.gray.g400,
        textDecoration: "line-through",
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
]);

export const placeholderClass = style({
  color: themeColors.gray.g400,
});

export const selectedDateClass = style({
  display: "inline-flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  padding: "0.25em 0.5em",
  borderRadius: "0.375rem",
  fontSize: "12px",
  backgroundColor: themeColors.brand.primary,
  color: themeColors.brand.lighter,
  columnGap: "0.5em",
});

export const removeButtonClass = style([
  disabledClass,
  {
    borderRadius: "0.375rem",
    display: "inline-flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.25em",
    cursor: "pointer",
    ":enabled": {
      background: "transparent",
    },
    ":hover": {
      backgroundColor: themeColors.input.primary.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.primary.active,
    },
  },
]);

export const removeIconClass = style({
  color: themeColors.brand.lighter,
  fontSize: "10px",
  background: "transparent",
});
