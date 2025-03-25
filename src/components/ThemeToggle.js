import { ThemeContext } from '../App';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../components/style/EventCard.css';

const useTheme = () => useContext(ThemeContext);

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <ButtonGroup className='buttontheme' variant="outlined" aria-label="Basic button group">
            <Button onClick={toggleTheme}>
                Сменить тему на {theme === 'light' ? 'темную' : 'светлую'}
            </Button>
        </ButtonGroup>
    );
}

export default ThemeToggle;
