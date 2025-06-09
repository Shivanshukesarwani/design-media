import { createTheme } from '@mui/material/styles';

const light = {
  palette: {
    mode: 'light',
    primary: { main: '#4169e1' },
    secondary: { main: '#ff8c00' },
    background: { default: '#f4f7fa', paper: '#fff' },
    text: { primary: '#222', secondary: '#555' }
  }
};

const dark = {
  palette: {
    mode: 'dark',
    primary: { main: '#4169e1' },
    secondary: { main: '#ff8c00' },
    background: { default: '#181a20', paper: '#23252b' },
    text: { primary: '#fff', secondary: '#b0b8c9' }
  }
};

export const getTheme = (darkMode: boolean) => createTheme(darkMode ? dark : light);