import { keyframes, style } from "@vanilla-extract/css";
import { fadeIn, fadeOut } from "../../styles/animations.css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

const expandHeight = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--height)",
  },
});

const expandWidth = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: "var(--height)",
  },
});

const collapseWidth = {
  from: {
    width: "var(--height)",
  },
  to: {
    width: 0,
  },
};

const collapseHeight = keyframes({
  from: {
    height: "var(--height)",
  },
  to: {
    height: 0,
  },
});

export const rootClass = style({
  display: "flex",
  vars: {
    "--padding-x": "0.625rem",
    "--padding-y": "0.625rem",
  },
  selectors: {
    "&[data-orientation='horizontal']": {
      flexDirection: "row",
      height: "20rem",
      maxHeight: "calc(100vh - 8rem)",
    },
    "&[data-orientation='vertical']": {
      flexFlow: "column nowrap",
      width: "24rem",
      maxWidth: "calc(100vw - 8rem)",
    },
  },
});

export const itemClass = style({
  overflowAnchor: "none",
  selectors: {
    "&[data-orientation='vertical']": {
      display: "block",
      borderBottom: `1px solid ${colors.border.default}`,
    },
    "&[data-orientation='horizontal'] ": {
      display: "flex",
      borderInlineEnd: `1px solid ${colors.border.default}`,
    },
  },
});

export const itemTriggerClass = style([
  disabledClass,
  outlineOnFocusClass,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.75rem",
    paddingInline: "var(--padding-x)",
    fontWeight: 600,
    textAlign: "start",
    borderRadius: "0.375rem",
    cursor: "pointer",
    selectors: {
      "&[data-orientation='vertical']": {
        width: "100%",
        minHeight: "2.5rem",
      },
      "&[data-orientation='horizontal']": {
        height: "100%",
        minWidth: "2.5rem",
        writingMode: "sideways-lr",
      },
    },
  },
]);

export const itemIndicatorClass = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "rotate 200ms ease",
  transformOrigin: "center",
  selectors: {
    "&[data-orientation='horizontal']": {
      display: "none",
    },
    "&[data-state='open']": {
      rotate: "180deg",
    },
  },
});

export const itemContentClass = style({
  overflow: "hidden",
  borderRadius: "0.5rem",
  paddingTop: "0.25rem",
  selectors: {
    "&[data-state='open']": {
      animationDuration: "200ms",
      animationTimingFunction: "ease-out",
    },
    "&[data-state='open'],&[data-orientation='vertical']": {
      animationName: `${expandHeight} ${fadeIn}`,
      willChange: "height",
    },
    "&[data-state='open'],&[data-orientation='horizontal']": {
      animationName: `${expandWidth} ${fadeIn}`,
      willChange: "width",
    },
    "&[data-state='closed']": {
      animationDuration: "200ms",
      animationTimingFunction: "ease-out",
    },
    "&[data-state='closed'],&[data-orientation='vertical']": {
      animationName: `${collapseHeight} ${fadeOut}`,
      willChange: "height",
    },
    "&[data-state='closed'],&[data-orientation='horizontal']": {
      animationName: `${collapseWidth} ${fadeOut}`,
      willChange: "width",
    },
    "&[data-orientation='horizontal']": {
      whiteSpace: "nowrap",
    },
  },
});

export const itemBodyClass = style({
  paddingInline: "var(--padding-x)",
  paddingBottom: "var(--padding-y)",
});

export const bodyCenteredClass = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  textAlign: "center",
  height: "100%",
  width: "100%",
});
