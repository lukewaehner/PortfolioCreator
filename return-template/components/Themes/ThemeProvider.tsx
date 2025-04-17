import React, { createContext, useContext, useState, useEffect } from "react";
import content from "@/data/content.json";

/**
 * ThemeContext interface defines the shape of our theme context
 */
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: typeof content.theme.colors.light | typeof content.theme.colors.dark;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: content.theme.colors.light,
});

/**
 * Custom hook to use the theme context
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * ThemeProvider Component
 *
 * This component provides theme context to the entire application.
 * It manages the current theme state and provides methods to toggle between light and dark mode.
 * The theme preference is saved to localStorage for persistence across sessions.
 * This implementation uses theme colors directly from content.json
 *
 * @param {React.ReactNode} children - Child components that will have access to the theme context
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Check for user's preferred color scheme and localStorage
  const getInitialTheme = (): boolean => {
    // Check if we have a saved preference in localStorage
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return savedTheme === "true";
    }

    // If no saved preference, check system preference
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Default to light mode
    return false;
  };

  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Initialize theme after component mount (for SSR compatibility)
  useEffect(() => {
    setIsDarkMode(getInitialTheme());
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());

    // Update document body class for global styling
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Get the current theme based on mode
  const theme = isDarkMode
    ? content.theme.colors.dark
    : content.theme.colors.light;

  // Context value that will be provided
  const contextValue: ThemeContextType = {
    isDarkMode,
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
