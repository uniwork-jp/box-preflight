import { createTheme } from '@mui/material/styles';
import { green, amber, brown } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
      sub: '#67b56a',
    },
    secondary: {
      main: '#ef7f40',
      // main: amber[900],
      contrastText: '#fff',
    },
    sub1: '#8f7e62',
    icon: '#c83056',
  },
  typography: {
    imgCaption: {
      fontWeight: 600,
      fontSize: '1.1rem',
      letterSpacing: '0.1em',
      whiteSpace: 'pre-line',
    },
    subText: {
      fontSize: '0.75rem',
      letterSpacing: '0.03333em',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xm: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // breakpoints: {
  //   values: {
  //     xxs: 320,
  //   },
  // },
});

export default theme;
