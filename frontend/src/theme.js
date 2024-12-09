import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF0000',
            light: '#FF3333',
            dark: '#CC0000',
        },
        secondary: {
            main: '#1a1a1a',
            light: '#333333',
            dark: '#000000',
        },
        background: {
            default: '#000000',
            paper: 'rgba(10, 10, 10, 0.95)',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
        },
        error: {
            main: '#FF0000',
        },
    },
    typography: {
        fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            letterSpacing: '0.3em',
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: '2.5rem',
            letterSpacing: '0.2em',
            fontWeight: 600,
        },
        h3: {
            fontSize: '2rem',
            letterSpacing: '0.15em',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.75rem',
            letterSpacing: '0.1em',
            fontWeight: 500,
        },
        button: {
            letterSpacing: '0.2em',
            fontWeight: 500,
            textTransform: 'uppercase',
        },
        body1: {
            letterSpacing: '0.05em',
        },
    },
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#FF0000 #1a1a1a",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 8,
                        height: 8,
                        backgroundColor: "#1a1a1a",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 0,
                        backgroundColor: "#FF0000",
                        border: "1px solid #1a1a1a",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    padding: '15px 30px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(45deg, #000000 30%, #1a1a1a 90%)',
                    border: '1px solid #333',
                    transition: 'all 0.3s ease-in-out',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.2), transparent)',
                        transition: 'all 0.5s ease',
                    },
                    '&:hover': {
                        borderColor: '#FF0000',
                        transform: 'scale(1.02)',
                        boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)',
                        '&::before': {
                            left: '100%',
                        },
                    },
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                            borderColor: '#333',
                            transition: 'all 0.3s ease',
                        },
                        '&:hover fieldset': {
                            borderColor: '#FF0000',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FF0000',
                            borderWidth: '2px',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#CCCCCC',
                        '&.Mui-focused': {
                            color: '#FF0000',
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: 'rgba(10, 10, 10, 0.95)',
                    borderRadius: 0,
                    border: '1px solid #333',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
                        borderColor: '#FF0000',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(10, 10, 10, 0.95)',
                    borderRadius: 0,
                    border: '1px solid #333',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
                        borderColor: '#FF0000',
                    },
                },
            },
        },
    },
});