import { createTheme } from '@tamagui/core';

const theme = createTheme({
    font: {
        body: {
            family: 'Helvetica, Arial, sans-serif',
            lineHeight: {
                1: '1.5',
                2: '1.8',
            },
            size: {
                1: '16px',
                2: '20px',
            },
            weight: {
                1: '400',
                2: '600',
            },
        },
        heading: {
            family: 'Helvetica, Arial, sans-serif',
            lineHeight: {
                1: '1.2',
                2: '1.5',
            },
            size: {
                1: '24px',
                2: '36px',
            },
            weight: {
                1: '600',
                2: '800',
            },
        },
    },
    colors: {
        background: '#121212',
        text: '#FFFFFF',
        primary: '#FFD700',
        secondary: '#009688',
    },
});

export default theme;