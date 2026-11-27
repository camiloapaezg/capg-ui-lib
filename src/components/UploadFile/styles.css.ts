import { style } from "@vanilla-extract/css";
import {
  dataInvalidClass,
  disabledClass,
  labelRootClass,
  outlineOnFocusClass,
} from "../../styles/common.css";
import { tokens } from "../../styles/theme.css";

export const rootClass = style({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "1rem",
  width: "100%",
  maxWidth: "24rem",
  vars: {
    "--icon-preview-size": "2.5rem",
  },
});

export const labelClass = style([disabledClass, labelRootClass]);

export const iconPreviewClass = style({
  width: "var(--icon-preview-size)",
  height: "var(--icon-preview-size)",
  color: tokens.text.secondary,
});

export const iconUploadClass = style({
  height: "4rem !important",
  width: "4rem !important",
});

export const imagePreviewClass = style({
  width: "var(--icon-preview-size)",
  height: "var(--icon-preview-size)",
  objectFit: "cover",
  borderRadius: "0.375rem",
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
  background: tokens.surface.default,
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
  border: `1px solid ${tokens.border.default}`,
  borderRadius: "0.375rem",
  selectors: {
    "&[data-rejected]": {
      borderColor: tokens.semantic.error,
      color: tokens.semantic.error,
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
    border: `2px dashed ${tokens.text.secondary}`,
    borderRadius: "0.375rem",
    cursor: "pointer",
    textAlign: "center",
    transition: "background 150ms, border-color 150ms",
    color: tokens.primary.default,
    ":hover": {
      backgroundColor: tokens.surface.light,
    },
    selectors: {
      "&[data-dragging]": {
        background: tokens.surface.light,
        borderColor: tokens.primary.default,
        borderStyle: "solid",
      },
    },
  },
]);

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
