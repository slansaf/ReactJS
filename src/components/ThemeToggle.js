import { ThemeContext } from '../App';
import { useContext } from 'react';

const useTheme = () => useContext(ThemeContext);

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Сменить тему на {theme === 'light' ? 'темную' : 'светлую'}
    </button>
  );
}

export default ThemeToggle;
