import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('UI/Button', () => {
  let clickTestValue = 0;
  const wrapper = shallow(
    <Button
      onClick={() => {
        clickTestValue += 1;
      }}
    >
      Hello
    </Button>
  );
  wrapper.simulate('click');

  expect(wrapper.text()).toEqual('Hello');

  expect(clickTestValue).toEqual(1);
});
