"use client";

import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return null; // No UI output needed
}
