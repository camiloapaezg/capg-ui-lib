import { style } from "@vanilla-extract/css";
import { tokens } from "./theme.css";

export const outlineOnFocusClass = style({
  selectors: {
    "&:focus,&:focus-visible ": {
      outline: `2px solid ${tokens.primary.default}`,
      outlineOffset: "-2px",
    },
  },
});

export const disabledClass = style({
  selectors: {
    "&[data-disabled],&:disabled": {
      opacity: 0.5,
      filter: "grayscale(100%)",
      pointerEvents: "none",
    },
  },
});

export const dataInvalidClass = style({
  selectors: {
    "&[data-invalid]": {
      borderColor: tokens.semantic.error,
    },
    "&[data-invalid]:focus": {
      borderColor: tokens.semantic.error,
      boxShadow: `0 0 0 1px ${tokens.semantic.error}`,
    },
  },
});

export const iconBaseClass = style({
  fontSize: "1rem",
  fontWeight: 500,
  background: "transparent",
  color: "inherit",
  flexShrink: 0,
});

export const labelBaseClass = style({
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.25rem",
});
