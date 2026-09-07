import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { tokens } from "../../styles/theme.css";

export const rootClass = style({
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "flex-start",
  maxWidth: "40rem",
  width: "100%",
});

export const controlsClass = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});

export const itemsClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "0.25rem",
  width: "100%",
  overflowY: "auto",
});

export const itemClass = style([
  disabledClass,
  outlineOnFocusClass,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "2.25rem",
    height: "2.25rem",
    paddingInline: "0.5rem",
    fontWeight: 500,
    borderRadius: "0.375rem",
    userSelect: "none",
    cursor: "pointer",
    background: "transparent",
    border: `1px solid ${tokens.border.strong}`,
    transition: "background 150ms, border-color 150ms, color 150ms",
    ":hover": {
      color: tokens.primary.default,
      borderColor: tokens.primary.default,
    },
    ":active": {
      backgroundColor: tokens.surface.light,
    },
    selectors: {
      "&[data-selected]": {
        color: tokens.primary.lighter,
        backgroundColor: tokens.primary.default,
        borderColor: tokens.primary.default,
      },
    },
  },
]);

export const ellipsisClass = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "2.25rem",
  height: "2.25rem",
  userSelect: "none",
});
