"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "@/components/Themes/ThemeProvider";
import { ThemeToggle } from "@/components/Themes/ThemeToggle";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add theme transition class to body
  useEffect(() => {
    document.body.classList.add("theme-transition");
    return () => {
      document.body.classList.remove("theme-transition");
    };
  }, []);

  return (
    <ThemeProvider>
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default ThemeProviderWrapper;
