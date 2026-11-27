import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { tokens } from "../../styles/theme.css";
import { buttonPrimaryClass } from "../Button/styles.css";

const triggerClass = style([
  buttonPrimaryClass,
  {
    minHeight: "0rem",
    minWidth: "0rem",
    width: "100%",
    borderRadius: "0rem",
    userSelect: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);

export const rootClass = style([
  disabledClass,
  {
    display: "inline-flex",
    flexFlow: "column nowrap",
    gap: "0.375em",
    width: "100%",
    maxWidth: "20rem",
    vars: {
      "--num-input-stepper-width": "3rem",
    },
  },
]);

export const controlClass = style({
  display: "flex",
  flexGrow: 1,
  flexFlow: "row nowrap",
  position: "relative",
  isolation: "isolate",
});

export const inputClass = style([
  outlineOnFocusClass,
  {
    width: "100%",
    height: "2.5rem",
    paddingInline: "0.75rem calc(var(--num-input-stepper-width) + 0.5rem)",
    fontWeight: 500,
    fontVariantNumeric: "tabular-nums",
    backgroundColor: "transparent",
    border: `1px solid ${tokens.border.strong}`,
    borderRadius: "0.375rem",
    outline: "none",
    selectors: {
      "&[data-has-scrubber]": {
        paddingInlineStart: "2.5rem",
      },
    },
  },
]);

export const triggersWrapperClass = style({
  position: "absolute",
  top: "1px",
  bottom: "1px",
  right: "1px",
  display: "inline-flex",
  flexFlow: "column nowrap",
  width: "var(--num-input-stepper-width)",
  borderLeft: `1px solid ${tokens.border.strong}`,
});

export const triggerUpClass = style([
  triggerClass,
  {
    borderTopRightRadius: "0.275rem",
    borderBottom: `1px solid ${tokens.border.strong}`,
  },
]);

export const triggerDownClass = style([
  triggerClass,
  {
    borderBottomRightRadius: "0.275rem",
  },
]);

export const iconChevronUpClass = style({
  transform: "rotate(180deg)",
});
