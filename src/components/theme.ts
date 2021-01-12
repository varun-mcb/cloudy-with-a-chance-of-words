import { createMuiTheme } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';

export const APP_BAR_HEIGHT = 40;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[500],
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: APP_BAR_HEIGHT,
      },
    },
  },
});
