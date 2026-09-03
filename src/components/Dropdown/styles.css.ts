import { style } from "@vanilla-extract/css";
import { scaleFadeIn, scaleFadeOut } from "../../styles/animations.css";
import { disabledClass, labelBaseClass } from "../../styles/common.css";
import { colors, shadows } from "../../styles/theme.css";
import { textInputClass } from "../TextInput/styles.css";

export const rootClass = style({
  display: "inline-flex",
  flexFlow: "column nowrap",
  gap: "0.25rem",
  width: "100%",
  maxWidth: "24rem",
});

export const labelClass = style([disabledClass, labelBaseClass]);

export const controlClass = style([
  disabledClass,
  {
    position: "relative",
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.75rem",
  },
]);

export const controlTriggerClass = style([
  textInputClass,
  {
    userSelect: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.75rem",
    minHeight: "2.75rem",
    cursor: "pointer",
  },
]);

export const valueTextClass = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "inherit",
  paddingRight: "3rem",
});

export const controlIndicatorsClass = style({
  position: "absolute",
  top: "50%",
  right: "1rem",
  transform: "translateY(-50%)",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.5rem",
});

export const controlIndicatorClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});

export const contentClass = style({
  padding: "0.5rem",
  minWidth: "var(--reference-width)",
  maxHeight: "min(var(--available-height, 18.75rem), 18.75rem)",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "0.5rem",
  backgroundColor: colors.surface.default,
  borderRadius: "0.375rem",
  boxShadow: shadows.md,
  zIndex: `calc(50 + var(--layer-index, 0))`,
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: `${colors.primary.default} ${colors.surface.light}`,
  selectors: {
    "&::-webkit-scrollbar": {
      width: "0.5rem",
      background: colors.surface.light,
      borderRadius: "0.375rem",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "0.375rem",
    },
    "&[data-state='open']": {
      animation: `${scaleFadeIn} 0.15s ease-out`,
    },
    "&[data-state='closed'] ": {
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
  padding: "0.25rem 0.5rem",
  fontWeight: 600,
  color: colors.text.secondary,
  textTransform: "uppercase",
  letterSpacing: "0.025em",
});

export const itemClass = style([
  disabledClass,
  {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "0.375rem",
    padding: "0.5rem",
    userSelect: "none",
    cursor: "pointer",
    selectors: {
      "&[data-highlighted]": {
        background: colors.surface.light,
      },
      "&[data-state='checked']": {
        color: colors.primary.default,
      },
    },
  },
]);

export const itemTextClass = style([
  valueTextClass,
  {
    padding: 0,
    flex: 1,
  },
]);

export const itemIndicatorClass = style({
  display: "flex",
  flexFlow: "column nowrap",
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
