import { FC } from 'react';
import {
  makeStyles,
  CssBaseline,
  MuiThemeProvider,
  AppBar,
  Typography,
} from '@material-ui/core';

import { APP_BAR_HEIGHT, theme } from './theme';
import Cloudy from './Cloudy';
import HSpacer from './widgets/HSpacer';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  main: {
    height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
  },
});

const App: FC = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <section className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Typography>Cloudy</Typography>
            <HSpacer width={10} />
            <Typography variant="caption">Make Clouds Rain Meaning</Typography>
          </AppBar>
          <main className={classes.main}>
            <Cloudy />
          </main>
        </section>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
