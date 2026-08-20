import { style } from "@vanilla-extract/css";
import { disabledClass, outlineOnFocusClass } from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1em",
  width: "100%",
  maxWidth: "24em",
});

export const labelClass = style({
  fontWeight: 600,
  display: "flex",
  selectors: {
    "&[data-disabled]": {
      opacity: 0.5,
    },
  },
});

export const closeIconClass = style({
  fontSize: "16px",
});

export const previewIconClass = style({
  fontSize: "24px",
  color: themeColors.gray.g600,
});

export const itemGroupClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignSelf: "stretch",
  gap: "0.75em",
  listStyle: "none",
});

export const itemCompactClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  gap: "0.5em",
  padding: "0.5em 0.75em",
  background: themeColors.gray.g100,
  borderRadius: "0.375rem",
});

export const itemClass = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gridTemplateAreas: "'preview name delete' 'preview size delete'",
  alignItems: "center",
  columnGap: "0.75em",
  padding: "0.75em",
  background: "transparent",
  border: `1px solid ${themeColors.gray.g700}`,
  borderRadius: "0.375rem",
  selectors: {
    "&[data-rejected]": {
      borderColor: themeColors.semantic.error,
      color: themeColors.semantic.error,
    },
  },
});

export const itemNameClass = style({
  gridArea: "name",
  flex: 1,
  minWidth: "0em",
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const itemSizeTextClass = style({
  gridArea: "size",
  color: themeColors.gray.g700,
});

export const filePreviewClass = style({
  gridArea: "preview",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});

export const imagePreviewClass = style({
  width: "2.5em",
  height: "2.5em",
  objectFit: "cover",
  borderRadius: "0.375rem",
});

export const dropZoneClass = style([
  disabledClass,
  outlineOnFocusClass,
  {
    alignSelf: "stretch",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.75em",
    minHeight: "12em",
    padding: "1.5em",
    border: `2px dashed ${themeColors.gray.g700}`,
    borderRadius: "0.375rem",
    cursor: "pointer",
    textAlign: "center",
    transition: "background 150ms, border-color 150ms",
    color: themeColors.brand.primary,
    ":hover": {
      backgroundColor: themeColors.input.outline.hover,
    },
    selectors: {
      "&[data-dragging]": {
        background: themeColors.input.outline.active,
        borderColor: themeColors.brand.primary,
        borderStyle: "solid",
      },
      "&[data-invalid]": {
        borderColor: themeColors.semantic.error,
      },
    },
  },
]);

export const dropZoneIconClass = style({
  color: themeColors.gray.g700,
  fontSize: "3em",
});

export const dropZoneContentClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.25em",
});

export const dropZoneTitleClass = style({
  fontWeight: 600,
});

export const dropZoneDescriptionClass = style({
  fontWeight: 400,
  color: themeColors.gray.g700,
});
