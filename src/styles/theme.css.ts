import { createTheme, createThemeContract } from "@vanilla-extract/css";

const themeShadows = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)",
  xxl: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
} as const;

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
} as const;

const themeDarkColors = {
  ...brandColors,
  surface: {
    default: "#07111A",
    light: "#273449",
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
} as const;

export const colors = createThemeContract({
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
});

export const themeLightClass = createTheme(colors, themeLightColors);
export const themeDarkClass = createTheme(colors, themeDarkColors);
export const [shadowsClass, shadows] = createTheme(themeShadows);
