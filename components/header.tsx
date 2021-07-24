import styles from '../styles/Header.module.css';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const [theme, toggleTheme] = useTheme("light");

  return (
    <header className={styles.header}>
      <h1>Where is the world?</h1>
      <div className={styles.headerActions}>
        <button onClick={() => toggleTheme()}>Dark mode</button>
      </div>
    </header>
  );
}
