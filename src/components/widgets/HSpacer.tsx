import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

interface Props {
  width?: 10 | 20 | 30 | 40;
}

const useStyles = makeStyles({
  marginRight10: {
    marginRight: 10,
  },
  marginRight20: {
    marginRight: 20,
  },
  marginRight30: {
    marginRight: 30,
  },
  marginRight40: {
    marginRight: 40,
  },
});

const HSpacer: FC<Props> = (props) => {
  const classes = useStyles();
  const width = props.width ?? 20;
  return (
    <div
      className={clsx({
        [classes.marginRight10]: width === 10,
        [classes.marginRight20]: width === 20,
        [classes.marginRight30]: width === 30,
        [classes.marginRight40]: width === 40,
      })}
    />
  );
};

export default HSpacer;
