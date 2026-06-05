import { style } from "@vanilla-extract/css";
import { scaleFadeIn, scaleFadeOut } from "../../styles/animations.css";
import { disabledClass } from "../../styles/common.css";
import { themeColors, themeShadows } from "../../styles/theme";

export const contentClass = style({
  position: "relative",
  display: "flex",
  flexFlow: "column nowrap",
  padding: "0.25em",
  minWidth: "max(var(--reference-width), 10em)",
  background: "white",
  borderRadius: "4px",
  border: `1px solid ${themeColors.brand.primary}`,
  zIndex: "calc(50 + var(--layer-index, 0))",
  boxShadow: themeShadows.md,
  transformOrigin: "var(--transform-origin)",
  selectors: {
    "&[data-state='open']": {
      animation: `${scaleFadeIn} 0.15s ease-out`,
    },
    "&[data-state='closed']": {
      animation: `${scaleFadeOut} 0.15s ease-in forwards`,
    },
  },
});

export const itemGroupClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  selectors: {
    "& + &": {
      marginTop: "0.5em",
    },
  },
});

export const itemGroupLabelClass = style({
  padding: "0.375em 0.5em",
  fontWeight: 600,
  color: themeColors.gray.g700,
  textTransform: "uppercase",
  letterSpacing: "0.025em",
});

const itemClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.5em",
    borderRadius: "4px",
    userSelect: "none",
    textDecoration: "none",
    cursor: "pointer",
    minHeight: "2em",
    paddingInline: "0.725em",
    selectors: {
      "&[data-highlighted]": {
        backgroundColor: themeColors.input.ghost.hover,
      },
    },
  },
]);

export const itemButtonClass = style([itemClass, {}]);

export const checkboxItemClass = style([
  itemClass,
  {
    selectors: {
      "&[data-state='checked']": {
        color: themeColors.brand.primary,
      },
    },
  },
]);

export const itemTextClass = style({
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "inherit",
});

export const itemIndicatorClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  color: "inherit",
  selectors: {
    "&[data-state='unchecked']": {
      display: "none",
    },
  },
});
