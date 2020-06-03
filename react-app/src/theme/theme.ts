import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: '#f25822',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1e1e1e',
    },
  },
}));

export default theme;
