import { ChangeEventHandler, FC, useState } from 'react';
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

import { processWordCountAndStyles } from '../../utils/textUtils';
import FlexRect from './FlexRect';
import HSpacer from '../widgets/HSpacer';

interface Props {
  text: string;
}

const FLEX_RECT = 'FLEX_RECT';

const CloudFactory: FC<Props> = (props) => {
  const [selection, setSelection] = useState(FLEX_RECT);
  const wordStats = processWordCountAndStyles(props.text);

  const handleSelectionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <Typography>Cloud Type:</Typography>
        <HSpacer width={10} />
        <RadioGroup value={selection} onChange={handleSelectionChange}>
          <FormControlLabel
            value={FLEX_RECT}
            control={<Radio color="primary" />}
            label="Simple Flex Rectangle"
          />
        </RadioGroup>
      </Grid>
      <FlexRect words={wordStats} />
    </div>
  );
};

export default CloudFactory;
