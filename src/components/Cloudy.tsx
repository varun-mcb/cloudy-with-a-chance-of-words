import { FC, useState } from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

import CloudFactory from './CloudFactory/CloudFactory';
import VSpacer from './widgets/VSpacer';
import HSpacer from './widgets/HSpacer';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const initText = `Richard Russell Riordan Jr. (/ˈraɪərdən/; born June 5, 1964)[1] is an American author. He is known for writing the Percy Jackson & the Olympians series, about a teenager named Percy Jackson who discovers he is a son of the Greek god Poseidon. Riordan's books have been translated into forty-two languages and sold more than thirty million copies in the US.[2] 20th Century Fox adapted the first two books of his Percy Jackson series as part of a series of films. His books have spawned related media, such as graphic novels and short story collections. Riordan's first full-length novel was Big Red Tequila, which became the first book in the Tres Navarre series. His big breakthrough was The Lightning Thief (2005), the first novel in the five-volume Percy Jackson and the Olympians series, which placed a group of modern-day adolescents in a Greco-Roman mythological setting. Since then, Riordan has written The Kane Chronicles trilogy and The Heroes of Olympus series. The Kane Chronicles (2010-2012) focused on Egyptian mythology; The Heroes of Olympus was the sequel to the Percy Jackson series. Riordan also helped Scholastic Press develop The 39 Clues series and its spinoffs, and penned its first book, The Maze of Bones (2008).[3] His most recent publications are three books in the Magnus Chase and the Gods of Asgard series, based on Norse mythology.[4][5] The first book of his The Trials of Apollo series, The Hidden Oracle, was released in May 2016.
`;

const Cloudy: FC = () => {
  const [text, setText] = useState(initText);
  const [textToProcess, setTextToProcess] = useState(text);

  function handleCloudifyClick() {
    setTextToProcess(text);
  }

  function renderInputRow() {
    return (
      <Grid container alignItems="center" justify="center">
        <Grid item md={6}>
          <TextField
            variant="outlined"
            value={text}
            fullWidth
            multiline
            rowsMax={4}
            rows="4"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text here to be processed."
          />
        </Grid>
        <HSpacer />
        <Grid item>
          <Button
            onClick={handleCloudifyClick}
            variant="contained"
            color="primary"
          >
            Cloudify
          </Button>
        </Grid>
      </Grid>
    );
  }

  const classes = useStyles();

  return (
    <section className={classes.root}>
      {renderInputRow()}
      <VSpacer />
      <CloudFactory text={textToProcess} />
    </section>
  );
};

export default Cloudy;
