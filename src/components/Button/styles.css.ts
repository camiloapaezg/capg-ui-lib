import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

export const baseClass = style([
  outlineOnFocusClass,
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

export const primaryClass = style([
  baseClass,
  {
    color: colors.primary.lighter,
    backgroundColor: colors.primary.default,
    ":hover": {
      backgroundColor: colors.primary.darker,
    },
    ":active": {
      backgroundColor: colors.primary.dark,
    },
  },
]);

export const secondaryClass = style([
  baseClass,
  {
    color: colors.primary.lighter,
    backgroundColor: colors.secondary.default,
    ":hover": {
      backgroundColor: colors.secondary.darker,
    },
    ":active": {
      backgroundColor: colors.secondary.dark,
    },
  },
]);

export const outlineClass = style([
  baseClass,
  {
    background: "transparent",
    border: `1px solid ${colors.border.strong}`,
    ":hover": {
      color: colors.primary.default,
      borderColor: colors.primary.default,
    },
    ":active": {
      backgroundColor: colors.surface.light,
    },
  },
]);

export const ghostClass = style([
  baseClass,
  {
    background: "transparent",
    ":hover": {
      color: colors.primary.default,
    },
    ":active": {
      backgroundColor: colors.surface.light,
    },
  },
]);

export const iconButtonBaseClass = style({
  padding: 0,
  width: "2rem",
  height: "2rem",
});
