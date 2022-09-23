import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#001D6E',
        light: '#001D6E',
        dark: '#001D6E',
      },
      text: {
        primary: '#001D6E',
        secondary: '#132e83',
        disabled: '#001D6E',
      },
      divider: '#C4DDFF',
    },
    typography: {
      fontFamily: 'Lora',
    },
  });

export default theme;
