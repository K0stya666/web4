import React from 'react';
import { TextField, styled } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: 'linear-gradient(45deg, #FF0000, transparent)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1,
        },
        '&:hover::before, &.Mui-focused::before': {
            opacity: 0.2,
        },
    },
}));

const DemonicInput = (props) => {
    return <StyledTextField {...props} />;
};

export default DemonicInput;