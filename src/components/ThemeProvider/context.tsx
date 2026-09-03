import { createContext } from "react";
import type { ThemeProviderState } from "./types";

const ThemeContext = createContext<ThemeProviderState>({ className: "" });
export default ThemeContext;
