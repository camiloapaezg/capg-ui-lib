import { style } from "@vanilla-extract/css";
import { scaleFadeIn, scaleFadeOut } from "../../styles/animations.css";
import { disabledClass } from "../../styles/common.css";
import { themeColors, themeShadows } from "../../styles/theme";
import { textInputClass } from "../TextInput/styles.css";

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "0.25em",
  width: "100%",
  maxWidth: "24em",
});

export const labelClass = style({
  fontWeight: 600,
  userSelect: "none",
  marginBottom: "0.25em",
});

export const controlClass = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.75em",
});

export const controlTriggerClass = style([
  textInputClass,
  {
    userSelect: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.75em",
    minHeight: "2.75em",
    cursor: "pointer",
  },
]);

export const valueTextClass = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "inherit",
  paddingRight: "3em",
});

export const controlIndicatorsClass = style({
  position: "absolute",
  top: "50%",
  right: "1em",
  transform: "translateY(-50%)",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.5em",
});

export const controlIndicatorClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});

export const contentClass = style({
  padding: "0.5em",
  minWidth: "var(--reference-width)",
  maxHeight: "min(var(--available-height, 18.75em), 18.75em)",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "0.5em",
  backgroundColor: "white",
  borderRadius: "0.375rem",
  boxShadow: themeShadows.md,
  zIndex: `calc(50 + var(--layer-index, 0))`,
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: `${themeColors.gray.g400} ${themeColors.gray.g700}`,
  selectors: {
    "&::-webkit-scrollbar": {
      width: "0.5em",
      background: themeColors.gray.g700,
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
      marginTop: "0.5em",
    },
  },
});

export const itemGroupLabelClass = style({
  padding: "0.25em 0.5em",
  fontWeight: 600,
  color: themeColors.gray.g400,
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
    gap: "0.5em",
    borderRadius: "0.375rem",
    padding: "0.5em",
    userSelect: "none",
    cursor: "pointer",
    selectors: {
      "&[data-highlighted]": {
        background: themeColors.input.ghost.hover,
      },
      "&[data-state='checked']": {
        color: themeColors.brand.primary,
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
