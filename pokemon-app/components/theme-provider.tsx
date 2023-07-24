"use client";

import { ThemeProvider as NextThemesProivder } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
//<ThemeProvider cooper = "very cool" defaultState ="dark" />
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProivder {...props}>{children}</NextThemesProivder>;
}
