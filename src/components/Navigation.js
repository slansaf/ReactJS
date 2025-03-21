import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navigation() {
    return (


        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'rigth',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button><Link style={{ textDecoration: 'none' }} to="/">Главная страница</Link></Button>
                    <Button><Link style={{ textDecoration: 'none' }} to="/about">О нас</Link></Button>
                </ButtonGroup>
            </Box>

        </>

    );
}

export default Navigation;