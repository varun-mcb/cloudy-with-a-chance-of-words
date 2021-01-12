import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

interface Props {
  height?: 10 | 20 | 30 | 40;
}

const useStyles = makeStyles({
  marginBottom10: {
    marginBottom: 10,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginBottom40: {
    marginBottom: 40,
  },
});

const VSpacer: FC<Props> = (props) => {
  const classes = useStyles();
  const height = props.height ?? 20;
  return (
    <div
      className={clsx({
        [classes.marginBottom10]: height === 10,
        [classes.marginBottom20]: height === 20,
        [classes.marginBottom30]: height === 30,
        [classes.marginBottom40]: height === 40,
      })}
    />
  );
};

export default VSpacer;
