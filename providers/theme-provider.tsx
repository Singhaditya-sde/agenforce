"use client";
import React from "react";
import { ThemeProvider as NextThemeProvider ThemeProviderProps } from "next-themes";

export const ThemeProvidder = ({children, ...props}: ThemeProviderProps) => {
  return (
    <NextThemeProvider {...props}>{children}</NextThemeProvider>
  )
}