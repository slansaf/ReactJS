import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        if (value !== '') {
            const convertedValue = (value * 9/5) + 32;
            setFahrenheit(convertedValue.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        if (value !== '') {
            const convertedValue = (value - 32) * 5/9;
            setCelsius(convertedValue.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Температурный конвертер
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Цельсий (°C)"
                        variant="outlined"
                        fullWidth
                        value={celsius}
                        onChange={handleCelsiusChange}
                        type="number"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Фаренгейт (°F)"
                        variant="outlined"
                        fullWidth
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                        type="number"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default TemperatureConverter;
