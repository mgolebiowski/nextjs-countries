import styles from "../styles/Header.module.css";
import { useTheme, themeOptions } from "../hooks/useTheme";

export default function Header() {
  const [theme, toggleTheme] = useTheme("light");

  function getThemeIcon(theme: themeOptions) {
    return theme === 'light' ? 'far' : 'fas';
  }

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <div className={styles.headerActions}>
        <button onClick={() => toggleTheme()}>
          <span className="icon">
            <span className={`${getThemeIcon(theme)} fa-moon`}></span>
          </span>
          Dark mode
        </button>
      </div>
    </header>
  );
}
