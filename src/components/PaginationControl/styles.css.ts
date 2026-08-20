import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

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
    border: `1px solid ${themeColors.brand.darker}`,
    transition: "background 150ms, border-color 150ms, color 150ms",
    ":hover": {
      backgroundColor: themeColors.input.outline.hover,
    },
    ":active": {
      backgroundColor: themeColors.input.outline.active,
    },
    selectors: {
      "&[data-selected]": {
        color: themeColors.brand.lighter,
        backgroundColor: themeColors.brand.primary,
        borderColor: themeColors.brand.primary,
      },
    },
  },
]);

export const iconClass = style({
  fontSize: "16px",
  fontWeight: "500",
});

export const ellipsisClass = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "2.25rem",
  height: "2.25rem",
  userSelect: "none",
});
