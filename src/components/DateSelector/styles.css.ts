import { style } from "@vanilla-extract/css";
import { fadeIn, fadeOut } from "../../styles/animations.css";
import {
  disabledClass,
  iconBaseClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { colors, shadows } from "../../styles/theme.css";

const borderRadius = "0.375rem";

const viewTriggerClass = style([
  disabledClass,
  {
    cursor: "pointer",
    color: colors.primary.lighter,
    fontWeight: 600,
    ":enabled": {
      background: "transparent",
    },
    ":hover": {
      backgroundColor: colors.primary.darker,
    },
    ":active": {
      backgroundColor: colors.primary.dark,
    },
  },
]);

const chevronClass = style([
  viewTriggerClass,
  {
    width: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
]);

const buttonClass = style([
  disabledClass,
  {
    borderRadius,
    cursor: "pointer",
    background: "transparent",
    ":hover": {
      color: colors.primary.default,
    },
    ":active": {
      backgroundColor: colors.surface.light,
    },
  },
]);

export const rootClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
    maxWidth: "26rem",
    position: "relative",
    rowGap: "0.5rem",
    color: "inherit",
  },
]);

export const controlClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  columnGap: "0.5rem",
  minHeight: "2.5rem",
  height: "fit-content",
  width: "100%",
});

export const multipleInputClass = style({
  alignSelf: "stretch",
  minWidth: "8rem",
  padding: "0.25rem 0.5rem",
  border: `1px solid ${colors.border.strong}`,
  borderRadius,
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "0.25rem",
  flexGrow: 1,
});

export const triggerClass = style([
  {
    border: `1px solid ${colors.border.strong}`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.5rem",
    height: "2.5rem",
    flexShrink: 0,
    transition: "background 0.15s ease, border-color 0.15s ease",
  },
  buttonClass,
]);

export const clearTriggerClass = style([
  {
    border: `1px solid ${colors.border.strong}`,
    padding: "0.5rem 1rem",
    height: "2.5rem",
  },
  buttonClass,
]);

export const contentClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  rowGap: "0.5rem",
  minWidth: "18rem",
  background: colors.primary.default,
  borderRadius: borderRadius,
  outline: "none",
  border: `1px solid ${colors.primary.default}`,
  zIndex: "calc(50 + var(--layer-index, 0))",
  boxShadow: shadows.md,
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
  height: "3rem",
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

export const iconClass = style([
  iconBaseClass,
  {
    fontSize: "1.25rem",
  },
]);

export const tableClass = style({
  background: colors.surface.default,
  padding: "0.5em",
  borderRadius: `0px 0px ${borderRadius} ${borderRadius} `,
  borderCollapse: "separate",
  borderSpacing: "0em",
});

export const tableHeaderClass = style({
  color: colors.border.default,
  fontWeight: 500,
  textAlign: "center",
  textTransform: "uppercase",
});

export const tableRowClass = style({
  height: "2.5rem",
});

export const tableCellClass = style({
  textAlign: "center",
});

export const tableCellTriggerClass = style([
  buttonClass,
  outlineOnFocusClass,
  disabledClass,
  {
    height: "2.5rem",
    width: "3rem",
    marginBottom: "0.25rem",
    display: "inline-flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    outline: "none",
    userSelect: "none",
    ":enabled": {
      borderRadius,
      background: "transparent",
      cursor: "pointer",
    },
    selectors: {
      "&[data-today]": {
        fontWeight: 600,
        color: colors.primary.default,
      },
      "&[data-in-range]": {
        backgroundColor: colors.surface.light,
        color: colors.primary.default,
        borderRadius: 0,
      },
      "&[data-selected],&[data-range-start],&[data-range-end]": {
        backgroundColor: colors.primary.default,
        color: colors.primary.lighter,
        fontWeight: 500,
      },
      "&[data-range-start]": {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      },
      "&[data-range-end]": {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      },
      "&[data-outside-range]": {
        opacity: 0.5,
      },
      "&[data-unavailable]": {
        color: colors.text.secondary,
        textDecoration: "line-through",
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
]);

export const placeholderClass = style({
  color: colors.text.secondary,
});

export const selectedDateClass = style({
  display: "inline-flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  padding: "0.25rem 0.5rem",
  borderRadius,
  fontSize: "12px",
  backgroundColor: colors.primary.default,
  color: colors.primary.lighter,
  columnGap: "0.5rem",
});

export const removeButtonClass = style([
  disabledClass,
  {
    borderRadius,
    display: "inline-flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.25rem",
    cursor: "pointer",
    ":enabled": {
      background: "transparent",
    },
    ":hover": {
      backgroundColor: colors.primary.darker,
    },
    ":active": {
      backgroundColor: colors.primary.dark,
    },
  },
]);

export const removeIconClass = style({
  color: colors.primary.lighter,
  fontSize: "0.75rem",
  background: "transparent",
});
