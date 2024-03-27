"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

function ThemeProvider({ children, ...props }) {
  return React.createElement(NextThemesProvider, props, children);
}

export { ThemeProvider };
