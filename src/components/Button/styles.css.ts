import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { tokens } from "../../styles/theme.css";

export const rootClass = style([
  disabledClass,
  {
    fontWeight: 500,
    minWidth: "2rem",
    padding: "0.5rem 1rem",
    width: "fit-content",
    borderRadius: "0.375rem",
    cursor: "pointer",
    display: "inline-flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "0.5rem",
  },
]);

export const buttonPrimaryClass = style([
  rootClass,
  outlineOnFocusClass,
  {
    color: tokens.primary.lighter,
    backgroundColor: tokens.primary.default,
    ":hover": {
      backgroundColor: tokens.primary.darker,
    },
    ":active": {
      backgroundColor: tokens.primary.dark,
    },
  },
]);

export const buttonSecondaryClass = style([
  rootClass,
  outlineOnFocusClass,
  {
    color: tokens.primary.lighter,
    backgroundColor: tokens.secondary.default,
    ":hover": {
      backgroundColor: tokens.secondary.darker,
    },
    ":active": {
      backgroundColor: tokens.secondary.dark,
    },
  },
]);

export const buttonOutlineClass = style([
  rootClass,
  outlineOnFocusClass,
  {
    background: "transparent",
    border: `1px solid ${tokens.border.strong}`,
    ":hover": {
      color: tokens.primary.default,
      borderColor: tokens.primary.default,
    },
    ":active": {
      backgroundColor: tokens.surface.light,
    },
  },
]);

export const buttonGhostClass = style([
  rootClass,
  {
    background: "transparent",
    ":active": {
      backgroundColor: tokens.surface.light,
    },
  },
]);

export const buttonIconClass = style({
  padding: 0,
  width: "2rem",
  height: "2rem",
});
