import React from 'react';
import test from 'tape-catch';
import { shallow } from 'enzyme';
import Icon from './Icon';

test('Icon test example', (t) => {
  const icon = shallow(<Icon glyph="tick" />);
  t.equal(icon.is('.icon'), true, 'should have class icon');
  t.end();
});
