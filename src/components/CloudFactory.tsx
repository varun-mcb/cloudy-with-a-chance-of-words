import { FC } from 'react';

interface Props {
  text: string;
}

const CloudFactory: FC<Props> = (props) => {
  return <div>{props.text}</div>;
};

export default CloudFactory;
