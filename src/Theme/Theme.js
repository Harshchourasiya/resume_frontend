import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#e44747',
      light: '#e44747',
      dark: '#e44747',
    },
    text: {
      primary: '#233143',
      secondary: '#132e83',
      disabled: '#001D6E',
    },
  },
  typography: {
    fontFamily: 'Lora',
  },
  background: {
    color: "#FFF"
  }
});
theme = responsiveFontSizes(theme);
export default theme;
