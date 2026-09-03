import { style } from "@vanilla-extract/css";
import { scaleFadeIn, scaleFadeOut } from "../../styles/animations.css";
import { disabledClass } from "../../styles/common.css";
import { colors, shadows } from "../../styles/theme.css";

export const contentClass = style({
  position: "relative",
  display: "flex",
  flexFlow: "column nowrap",
  padding: "0.25rem",
  minWidth: "max(var(--reference-width), 10rem)",
  background: colors.surface.default,
  borderRadius: "0.375rem",
  border: `1px solid ${colors.primary.default}`,
  zIndex: "calc(50 + var(--layer-index, 0))",
  boxShadow: shadows.md,
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
      marginTop: "0.5rem",
    },
  },
});

export const itemGroupLabelClass = style({
  padding: "0.375rem 0.5rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.025rem",
});

const itemClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    userSelect: "none",
    textDecoration: "none",
    cursor: "pointer",
    minHeight: "2rem",
    paddingInline: "0.725rem",
    selectors: {
      "&[data-highlighted]": {
        backgroundColor: colors.surface.light,
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
        color: colors.primary.default,
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
