import { createMuiTheme } from '@material-ui/core/styles';
import { darkPrimary, darkSecondary } from './colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: darkPrimary,
    },
    secondary: {
      main: darkSecondary,
    },
  },
  spacing: 8,
});

export default theme;
