import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/pages/StartPage';
import MainPage from './components/pages/MainPage';
import RegisterForm from './components/forms/RegisterForm';
import GlowEffect from './components/effects/GlowEffect';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Router>
                <GlowEffect />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;