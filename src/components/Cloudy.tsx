import { FC, useState } from 'react';
import { TextField } from '@material-ui/core';

import CloudFactory from './CloudFactory';

const Cloudy: FC = () => {
  const [text, setText] = useState('');
  return (
    <section>
      <TextField value={text} onChange={(e) => setText(e.target.value)} />
      <CloudFactory text={text} />
    </section>
  );
};

export default Cloudy;
