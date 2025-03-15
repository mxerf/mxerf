import { cn } from "@/utils";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useState<"dark" | "light">();

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    const theme =
      localStorageTheme === "dark" || !localStorageTheme ? "dark" : "light";
    setTheme(() => theme);
    if (theme === "light") {
      document.body.classList.toggle("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      {theme && (
        <button
          onClick={toggleTheme}
          className={cn(
            "relative flex items-center justify-center text-foreground size-10 rounded-lg bg-transparent border hover:bg-foreground/5 hover:border-chart-1/20  transition-colors",
            className
          )}
        >
          <FaSun
            className={cn(
              "absolute opacity-100 rotate-0 transition duration-300",
              theme === "light" && "opacity-0 -rotate-[270deg]"
            )}
            size={18}
          />
          <FaMoon
            className={cn(
              "absolute opacity-100 rotate-0 transition duration-300",
              theme === "dark" && "opacity-0 -rotate-[270deg]"
            )}
            size={18}
          />
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
