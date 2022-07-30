import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const setDarkHandler = () => {
    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(colorTheme);
    localStorage.setItem("theme", colorTheme);
    setTheme(colorTheme);
  };
  useEffect(() => {
    if (window) {
      setTheme(localStorage.theme);
      console.log("first render", theme);
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
