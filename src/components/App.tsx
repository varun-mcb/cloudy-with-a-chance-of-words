import { AppBar, makeStyles } from '@material-ui/core';

import Cloudy from './Cloudy';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    height: 40,
  },
  main: {
    height: 'calc(100vh - 40px)',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppBar className={classes.appBar}>
        Cloudy - Make Clouds Rain Meaning
      </AppBar>
      <main className={classes.main}>
        <Cloudy />
      </main>
    </section>
  );
}

export default App;
