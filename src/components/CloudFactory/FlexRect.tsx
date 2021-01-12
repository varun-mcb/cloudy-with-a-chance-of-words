import { FC } from 'react';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';

import { WordCountStyles } from '../../types/wordCount';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants/words';
import { sortWordsInCenteredOrder } from '../../utils/textUtils';

interface Props {
  words: WordCountStyles[];
}

const useStyles = makeStyles({
  root: {
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH,
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid gray',
    overflow: 'hidden',
  },
  cloudBackground: {
    background:
      'url(https://upload.wikimedia.org/wikipedia/commons/9/95/Cartoon_cloud.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  word: {
    marginRight: 6,
  },
});

const FlexRect: FC<Props> = (props) => {
  const classes = useStyles();
  const wordsSortedInCenteredOrder = sortWordsInCenteredOrder(props.words);
  return (
    <Grid container justify="center">
      <section
        className={clsx(
          classes.root,
          !props.words.length && classes.cloudBackground
        )}
      >
        {wordsSortedInCenteredOrder.map((wordStat) => (
          <div
            style={{
              fontSize: wordStat.fontSize + 'rem',
              opacity: wordStat.opacity,
            }}
            className={classes.word}
            key={wordStat.word}
          >
            {wordStat.word}
          </div>
        ))}
      </section>
    </Grid>
  );
};

export default FlexRect;
