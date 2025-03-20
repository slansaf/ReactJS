import { useState } from "react";
import Button from '@mui/material/Button';

function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if(theme === 'light'){
            setTheme("dark");
            document.querySelector('body').style.backgroundColor = 'black';
        } else {
             setTheme("ligth");
            document.querySelector('body').style.backgroundColor = 'white';
        }
    }
    return (
        <Button onClick={switchTheme} variant="outlined">Изменить тему</Button>
    );
}

export default ThemeSwitcher;