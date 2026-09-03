import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

export const rootClass = style({
  display: "flex",
  width: "100%",
  vars: {
    "--steps-size": "2.5rem",
    "--steps-icon-size": "1rem",
    "--steps-thickness": "2px",
    "--steps-gutter": "0.325rem",
  },
  selectors: {
    "&[data-orientation='horizontal']": {
      flexFlow: "column nowrap",
      gap: "1rem",
    },
    "&[data-orientation='vertical']": {
      flexFlow: "row nowrap",
      minHeight: "20rem",
      gap: "3rem",
    },
  },
});

export const listClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  selectors: {
    "&[data-orientation='vertical']": {
      flexFlow: "column nowrap",
      alignItems: "flex-start",
    },
  },
});

export const itemClass = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  flex: "1 0 0",
  selectors: {
    "&:last-of-type": {
      flex: "initial",
    },
    "&[data-orientation='vertical']": {
      alignItems: "flex-start",
    },
  },
});

export const triggerClass = style([
  disabledClass,
  outlineOnFocusClass,
  {
    display: " flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    textAlign: "start",
    cursor: "pointer",
    borderRadius: "0.375rem",
  },
]);

export const indicatorClass = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  width: "var(--steps-size)",
  height: "var(--steps-size)",
  fontSize: "0.875rem",
  fontWeight: "600",
  borderRadius: "9999px",
  selectors: {
    "&[data-incomplete]": {
      border: `var(--steps-thickness) solid ${colors.border.strong}`,
    },
    "&[data-current]": {
      border: `var(--steps-thickness) solid ${colors.primary.default}`,
      color: colors.primary.default,
    },
    "&[data-complete]": {
      border: `var(--steps-thickness) solid ${colors.primary.default}`,
      background: colors.primary.default,
      color: colors.primary.lighter,
    },
  },
});

export const separatorClass = style({
  height: "var(--steps-thickness)",
  width: "100%",
  background: colors.border.strong,
  marginInline: "var(--steps-gutter)",
  flex: 1,
  selectors: {
    "&[data-state='complete']": {
      background: colors.primary.default,
    },
    "&[data-orientation='vertical']": {
      position: "absolute",
      width: "var(--steps-thickness)",
      height: "100%",
      maxHeight: "calc(100% - var(--steps-size) - var(--steps-gutter) * 2)",
      top: "calc(var(--steps-size) + var(--steps-gutter))",
      left: "calc(var(--steps-size) / 2 - 1px)",
      marginInline: 0,
    },
  },
});

export const contentWrapperClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  gap: "1rem",
  flexGrow: 1,
});

export const contentClass = style([
  outlineOnFocusClass,
  {
    minHeight: "10rem",
    height: "fit-content",
    selectors: {
      "&[hidden]": {
        display: "none",
      },
      "&[data-orientation='vertical']": {
        flex: 1,
      },
    },
  },
]);

export const actionsClass = style({
  display: "flex",
  gap: "0.5rem",
  justifyContent: "flex-end",
});
