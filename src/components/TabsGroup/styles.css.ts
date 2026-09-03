import { style } from "@vanilla-extract/css";
import { disabledClass } from "../../styles/common.css";
import { colors } from "../../styles/theme.css";

export const rootClass = style({
  display: "flex",
  maxWidth: "32rem",
  selectors: {
    "&[data-orientation='horizontal']": {
      flexDirection: "column",
      rowGap: "0.5rem",
    },
    "&[data-orientation='vertical']": {
      flexDirection: "row",
      columnGap: "0.75rem",
    },
  },
});

export const listClass = style({
  display: "inline-flex",
  position: "relative",
  isolation: "isolate",
  gap: "0.25rem",
  selectors: {
    "&[data-orientation='horizontal']": {
      flexDirection: "row",
    },
    "&[data-orientation='vertical']": {
      flexDirection: "column",
    },
  },
});

export const triggerClass = style([
  disabledClass,
  {
    position: "relative",
    height: "2rem",
    whiteSpace: "nowrap",
    userSelect: "none",
    fontWeight: 500,
    borderRadius: "0.375rem",
    paddingInline: "0.75rem",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    selectors: {
      "&:is(a)": {
        color: "inherit",
      },
      "&[data-orientation='horizontal']": {
        marginBottom: "0.15rem",
      },
      "&[data-orientation='vertical']": {
        justifyContent: "flex-start",
        width: "100%",
        paddingBlock: "0.5rem",
      },
      "&[data-selected]": {
        color: colors.primary.default,
      },
    },
  },
]);

export const indicatorClass = style({
  position: "absolute",
  background: colors.primary.default,
  borderRadius: "0.375rem",
  transitionProperty: "width, height, left, top",
  transitionDuration: "200ms",
  transitionTimingFunction: "ease-out",
  selectors: {
    "&[data-orientation='horizontal']": {
      bottom: "0px",
      height: "2px",
      width: "var(--width)",
    },
    "&[data-orientation='vertical']": {
      right: "0px",
      width: "2px",
      height: "var(--height)",
    },
  },
});
