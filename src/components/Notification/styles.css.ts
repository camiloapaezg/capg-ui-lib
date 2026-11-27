import { style } from "@vanilla-extract/css";
import { tokens } from "../../styles/theme.css";

export const rootClass = style({
  minWidth: "20rem",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "0.5rem",
  position: "relative",
  paddingBlock: "1rem",
  paddingInlineStart: "1rem",
  paddingInlineEnd: "2.5rem",
  borderRadius: "0.5rem",
  translate: "var(--x) var(--y)",
  scale: "var(--scale)",
  zIndex: "var(--z-index)",
  height: "var(--height)",
  opacity: "var(--opacity)",
  willChange: "translate, opacity, scale",
  transition:
    "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
  transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
  background: tokens.surface.default,
  vars: {
    "--toast-accent": tokens.text.primary,
  },
  selectors: {
    "&[data-placement^='top']": {
      boxShadow: `0 -4px 12px ${tokens.shadows.s1}, 0 0 1px ${tokens.shadows.s2}`,
    },
    "&[data-placement^='bottom']": {
      boxShadow: `0 4px 12px ${tokens.shadows.s1}, 0 0 1px ${tokens.shadows.s2}`,
    },
    "&[data-state='closed']": {
      transition: "translate 400ms, scale 400ms, opacity 200ms",
      transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)",
    },
    /* Info & Loading - subtle styling (accent color only) */
    "&[data-type='info']": {
      vars: {
        "--toast-accent": tokens.text.primary,
      },
    },
    "&[data-type='loading']": {
      vars: {
        "--toast-accent": tokens.text.secondary,
      },
    },
    /* Success, Error, Warning - filled background */
    "&[data-type='success']": {
      background: tokens.semantic.success,
      color: tokens.primary.lighter,
      vars: {
        "--toast-accent": tokens.surface.default,
      },
    },
    "&[data-type='error']": {
      background: tokens.semantic.error,
      color: tokens.primary.lighter,
      vars: {
        "--toast-accent": tokens.surface.default,
      },
    },
    "&[data-type='warning']": {
      background: tokens.semantic.warning,
      color: tokens.primary.lighter,
      vars: {
        "--toast-accent": tokens.surface.default,
      },
    },
  },
});

export const titleClass = style({
  color: "var(--toast-accent)",
  fontSize: "0.85rem",
  fontWeight: 600,
  lineHeight: "1.25rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const descriptionClass = style({
  color: "var(--toast-accent)",
  fontSize: "0.85rem",
  display: "inline",
  lineHeight: "1.25rem",
  opacity: 0.8,
});

export const buttonCloseClass = style({
  position: "absolute",
  top: "0.2rem",
  right: "0.2rem",
  ":active": {
    outline: "none",
    background: "transparent",
  },
});

export const iconCloseClass = style({
  color: "var(--toast-accent)",
});
