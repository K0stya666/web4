import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },
    '&:hover::after': {
        opacity: 1,
    },
}));

const DemonicButton = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default DemonicButton;