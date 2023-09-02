import { useState, useEffect } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

const Theme = () => {
  // Initialize the theme state based on local storage or system preference
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Function to toggle the theme state
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply the theme mode when the component mounts or when the theme state changes
  useEffect(() => {
    // Toggle icons visibility
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (isDarkMode) {
      // Add the 'dark' class to enable dark mode
      themeToggleLightIcon?.classList.add("hidden");
      themeToggleDarkIcon?.classList.remove("hidden");
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      // Remove the 'dark' class to disable dark mode
      themeToggleLightIcon?.classList.remove("hidden");
      themeToggleDarkIcon?.classList.add("hidden");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
    </div>
  );
};

export default Theme;
