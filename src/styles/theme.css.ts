import { createTheme, createThemeContract } from "@vanilla-extract/css";

const brandColors = {
  primary: {
    lighter: "#E6F2FF",
    light: "#7da6d4",
    default: "#0066A3",
    dark: "#004D7A",
    darker: "#16304D",
  },
  secondary: {
    default: "#4A7226",
    dark: "#3B5B1E",
    darker: "#2F4818",
  },
} as const;

const themeLightColors = {
  ...brandColors,
  surface: {
    default: "#F1F5F9",
    light: "#E1E7EF",
    backdrop: "#00000066",
  },
  text: {
    primary: "#1E293B",
    secondary: "#475569",
  },
  border: {
    default: "#64748B",
    strong: "#475569",
  },
  semantic: {
    info: "#1D4ED8",
    success: "#15803D",
    warning: "#8A5A00",
    error: "#B91C1C",
  },
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)",
    xxl: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
  },
} as const;

const themeDarkColors = {
  ...brandColors,
  surface: {
    default: "#07111A",
    light: "#273449",
    backdrop: "#ffffff66",
  },
  text: {
    primary: "#F8FAFC",
    secondary: "#CBD5E1",
  },
  border: {
    default: "#64748B",
    strong: "#94A3B8",
  },
  semantic: {
    info: "#60A5FA",
    success: "#4ADE80",
    warning: "#FACC15",
    error: "#F87171",
  },
  shadows: {
    xs: "0 1px 2px 0 rgb(255 255 255 / 0.04)",
    sm: "0 1px 3px 0 rgb(255 255 255 / 0.06), 0 1px 2px -1px rgb(255 255 255 / 0.04)",
    md: "0 4px 6px -1px rgb(255 255 255 / 0.08), 0 2px 4px -2px rgb(255 255 255 / 0.05)",
    lg: "0 10px 15px -3px rgb(255 255 255 / 0.10), 0 4px 6px -4px rgb(255 255 255 / 0.06)",
    xl: "0 20px 25px -5px rgb(255 255 255 / 0.12), 0 8px 10px -6px rgb(255 255 255 / 0.08)",
    xxl: "0 25px 50px -12px rgb(255 255 255 / 0.15)",
  },
} as const;

export const tokens = createThemeContract({
  primary: {
    lighter: null,
    light: null,
    default: null,
    dark: null,
    darker: null,
  },
  secondary: {
    default: null,
    dark: null,
    darker: null,
  },
  surface: {
    default: null,
    light: null,
    backdrop: null,
  },
  text: {
    primary: null,
    secondary: null,
  },
  border: {
    default: null,
    strong: null,
  },
  semantic: {
    info: null,
    success: null,
    warning: null,
    error: null,
  },
  shadows: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },
});

export const themeLightClass = createTheme(tokens, themeLightColors);
export const themeDarkClass = createTheme(tokens, themeDarkColors);
