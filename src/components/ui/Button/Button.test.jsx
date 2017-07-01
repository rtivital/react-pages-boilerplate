import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Button from './Button';

test('Button', (t) => {
  let clickTestValue = 0;
  const wrapper = shallow(<Button onClick={() => { clickTestValue += 1; }}>Hello</Button>);
  wrapper.simulate('click');

  t.equals(
    wrapper.text(),
    'Hello',
    'renders content from children'
  );

  t.equals(
    clickTestValue,
    1,
    'handles onClick events'
  );

  t.end();
});
