import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { JellyfinProvider } from './context/JellyfinContext';
import { ThemeProviderCustom, useThemeCustom } from './context/ThemeContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './i18n';

function MainApp() {
  const {theme} = useThemeCustom();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <JellyfinProvider>
        <MainApp />
      </JellyfinProvider>
    </ThemeProviderCustom>
  </React.StrictMode>
);