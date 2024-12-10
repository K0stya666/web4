import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Header = () => {
    return (
        <Box>
            {/* Первый Paper для заголовка, выровненный по центру */}
            <Paper
                elevation={4}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16px 32px',
                    margin: '0 auto',
                    maxWidth: '600px',
                    height: '56px',
                    color: 'white',
                    backgroundColor: 'black',
                }}
            >
                <Typography variant="h6" component="div">
                    Лабораторная работа по Web Programming 4
                </Typography>
            </Paper>

            {/* Второй Paper для информации, расположенный в правом верхнем углу */}
            <Paper
                elevation={4}
                sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '16px',
                    padding: '12px 16px',
                    color: 'white',
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    minWidth: '200px',
                }}
            >
                <Typography sx={{ fontSize: '0.666rem' }}>ФИО: Елисеев Константин Иванович</Typography>
                <Typography sx={{ fontSize: '0.666rem' }}>Группа: P3208</Typography>
                <Typography sx={{ fontSize: '0.666rem' }}>Вариант: 7898</Typography>
                <Typography sx={{ fontSize: '0.666rem' }}>©sponsored by IWD production</Typography>
            </Paper>
        </Box>
    );
};

export default Header;
