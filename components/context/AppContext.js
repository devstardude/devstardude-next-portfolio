import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const setDarkHandler = () => {
    localStorage.setItem("theme", colorTheme);
    setTheme(colorTheme);
  };
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (window) {
      setTheme(localStorage.theme);
    }
    if (localStorage.getItem("theme") === null) {
      console.log("no window");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  let sharedState = {
    isOpen,
    setIsOpen,
    theme,
    setDarkHandler,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
