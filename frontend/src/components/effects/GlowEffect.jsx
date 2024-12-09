import React from 'react';
import { Box, styled } from '@mui/material';

const GlowBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s ease',
    },
}));

const GlowEffect = () => {
    const handleMouseMove = (e) => {
        const glowElement = document.querySelector('.glow-effect');
        if (glowElement) {
            const x = e.clientX;
            const y = e.clientY;
            glowElement.style.setProperty('--mouse-x', `${x}px`);
            glowElement.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <GlowBox className="glow-effect" />;
};

export default GlowEffect;