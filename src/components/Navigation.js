import { Link } from 'react-router-dom';
import * as React from 'react';
import '../components/style/EventCard.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Navigation() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                    style={{
                        color: theme === 'light' ? 'black' : 'white',
                        backgroundColor: theme === 'light' ? 'white' : 'black',
                    }}
                >
                    <Button>
                        <Link
                            className={`app ${theme}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to="/"
                        >
                            Главная страница
                        </Link>
                    </Button>
                    <Button>
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to="/about"
                        >
                            О нас
                        </Link>
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    );
}

export default Navigation;
