"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

/**
 * FloatingThemeToggle Component
 *
 * A simple button fixed to the bottom right of the screen
 * that toggles between light and dark themes.
 */
export function ThemeToggle() {
  // Get theme context values from our custom ThemeProvider
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? theme.surface : theme.background,
        border: `1px solid ${theme.border}`,
        boxShadow: `0 4px 20px ${theme.primary}30`,
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6" style={{ color: theme.accent }} />
      ) : (
        <Moon className="h-6 w-6" style={{ color: theme.primary }} />
      )}
    </button>
  );
}

export default ThemeToggle;
