import React from 'react';
import { Card, styled } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
        transition: 'transform 0.3s ease',
        transform: 'scaleX(0)',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #FF0000, transparent)',
        transition: 'transform 0.3s ease',
        transform: 'scaleX(0)',
    },
    '&:hover::before, &:hover::after': {
        transform: 'scaleX(1)',
    },
}));

const DemonicCard = ({ children, ...props }) => {
    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    );
};

export default DemonicCard;