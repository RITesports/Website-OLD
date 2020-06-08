import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import './fonts/Industry';
import './fonts/ProximaNova';

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
  typography: {
    fontFamily: [
      'Industry',
      "'Proxima Nova'",
      'Roboto',
      'sans-serif',
    ].join(','),
  },
}));

export default theme;
