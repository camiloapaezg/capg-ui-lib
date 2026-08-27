import { style } from "@vanilla-extract/css";
import {
  dataInvalidClass,
  disabledClass,
  labelBaseClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { themeColors } from "../../styles/theme";

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1rem",
  width: "100%",
  maxWidth: "24rem",
});

export const labelClass = style([disabledClass, labelBaseClass]);

export const closeIconClass = style({
  fontSize: "1rem",
});

export const previewIconClass = style({
  fontSize: "1.75rem",
  color: themeColors.gray.g600,
});

export const itemGroupClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  alignSelf: "stretch",
  gap: "0.75rem",
  listStyle: "none",
});

export const itemCompactClass = style({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 0.75rem",
  background: themeColors.gray.g100,
  borderRadius: "0.375rem",
});

export const itemClass = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gridTemplateAreas: "'preview name delete' 'preview size delete'",
  alignItems: "center",
  columnGap: "0.75rem",
  padding: "0.75rem",
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
  width: "2.5rem",
  height: "2.5rem",
  objectFit: "cover",
  borderRadius: "0.375rem",
});

export const dropZoneClass = style([
  disabledClass,
  dataInvalidClass,
  outlineOnFocusClass,
  {
    alignSelf: "stretch",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.75rem",
    minHeight: "12rem",
    padding: "1.5rem",
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
    },
  },
]);

export const dropZoneIconClass = style({
  fontSize: "3rem",
});

export const dropZoneContentClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "0.25rem",
});

export const dropZoneTitleClass = style({
  fontWeight: 600,
});

export const dropZoneDescriptionClass = style({
  fontWeight: 400,
});
