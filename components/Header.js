import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function Header() {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
    
    

  return (
    <header  className={darkMode ? 'dark' : ''}>
      <h1>Where in the world?</h1>
      <button className={`mode-toggle ${darkMode ? 'dark' : ''}`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
     </button>
    </header>
  );
}
