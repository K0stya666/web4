import React from 'react';
import { Container, styled } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(3),
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,0,0,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
    },
}));

const DemonicContainer = ({ children, ...props }) => {
    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    );
};

export default DemonicContainer;