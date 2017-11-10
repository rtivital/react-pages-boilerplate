import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('UI/Button', module)
  .add('Default white theme', () => <Button>Default white button</Button>)
  .add('Blue theme', () => <Button theme="blue">Primary blue button</Button>);
