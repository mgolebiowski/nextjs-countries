import { useEffect, useState } from "react";

type themeOptions = "light" | "dark";

const themesStateMachine: Record<themeOptions, themeOptions> = {
    light: "dark",
    dark: "light",
  };

export function useTheme(initialValue: themeOptions): [themeOptions, () => void] {
    const [theme, setTheme] = useState<themeOptions>(initialValue);

    useEffect(() => {
        document.body.dataset.theme = theme;
      }, [theme]);

    function toggleTheme() {
        setTheme(themesStateMachine[theme]);
    }

    return [theme, toggleTheme];
}