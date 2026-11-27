import { style } from "@vanilla-extract/css";
import { fadeIn, fadeOut } from "../../styles/animations.css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { tokens } from "../../styles/theme.css";
import { buttonOutlineClass, buttonPrimaryClass } from "../Button/styles.css";

const borderRadius = "0.375rem";

const triggerControlClass = style([
  buttonPrimaryClass,
  {
    selectors: {
      "&:focus,&:focus-visible ": {
        outline: "none",
      },
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

export const multipleInputWrapperClass = style({
  alignSelf: "stretch",
  minWidth: "8rem",
  paddingInline: "0.75rem",
  paddingBlock: "0.25rem",
  border: `1px solid ${tokens.border.strong}`,
  borderRadius,
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  display: "inline-flex",
  flexFlow: "row wrap",
  alignItems: "center",
  gap: "0.25rem",
  flexGrow: 1,
});

export const contentClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  rowGap: "0.5rem",
  minWidth: "18rem",
  background: tokens.primary.default,
  borderRadius: borderRadius,
  outline: "none",
  border: `1px solid ${tokens.primary.default}`,
  zIndex: "calc(50 + var(--layer-index, 0))",
  boxShadow: tokens.boxShadows.md,
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
  height: "2.5rem",
  background: "inherit",
});

export const triggerClass = style([
  buttonOutlineClass,
  {
    width: "2.5rem",
    height: "2.5rem",
    flexShrink: 0,
    transition: "background 0.15s ease, border-color 0.15s ease",
  },
]);

export const triggerPrevClass = style([
  triggerControlClass,
  {
    width: "2rem",
    borderRadius: `${borderRadius} 0px 0px 0px`,
  },
]);

export const triggerNextClass = style([
  triggerControlClass,
  {
    width: "2rem",
    borderRadius: `0px ${borderRadius} 0px 0px`,
  },
]);

export const triggerRangeTextClass = style([
  triggerControlClass,
  {
    flexGrow: 1,
  },
]);

export const textRangeClass = style({
  color: "inherit",
});

export const iconTriggerClass = style({
  height: "1.5rem",
  width: "1.5rem",
});

export const iconPrevClass = style({
  transform: "rotate(90deg)",
});

export const iconNextClass = style({
  transform: "rotate(-90deg)",
});

export const tableClass = style({
  background: tokens.surface.default,
  padding: "0.5em",
  borderRadius: `0px 0px ${borderRadius} ${borderRadius} `,
  borderCollapse: "separate",
  borderSpacing: "0em",
});

export const tableHeaderClass = style({
  color: tokens.border.default,
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
    borderRadius,
    cursor: "pointer",
    userSelect: "none",
    ":enabled": {
      borderRadius,
      background: "transparent",
      cursor: "pointer",
    },
    ":hover": {
      color: tokens.primary.default,
    },
    ":active": {
      backgroundColor: tokens.surface.light,
    },
    selectors: {
      "&[data-today]": {
        fontWeight: 600,
        color: tokens.primary.default,
      },
      "&[data-in-range]": {
        backgroundColor: tokens.surface.light,
        color: tokens.primary.default,
        borderRadius: 0,
      },
      "&[data-selected],&[data-range-start],&[data-range-end]": {
        backgroundColor: tokens.primary.default,
        color: tokens.primary.lighter,
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
        color: tokens.text.secondary,
        textDecoration: "line-through",
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
]);

export const placeholderClass = style({
  color: tokens.text.secondary,
});

export const selectedDateClass = style({
  display: "inline-flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  padding: "0.25rem 0.5rem",
  borderRadius,
  fontSize: "0.85rem",
  backgroundColor: tokens.primary.default,
  color: tokens.primary.lighter,
  columnGap: "0.5rem",
});

export const buttonRemoveClass = style([
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
      backgroundColor: tokens.primary.darker,
    },
    ":active": {
      backgroundColor: tokens.primary.dark,
    },
  },
]);

export const iconRemoveClass = style({
  color: tokens.primary.lighter,
  height: "1rem",
  width: "1rem",
});
